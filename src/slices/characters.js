import { async } from "@firebase/util";
import { createSlice } from "@reduxjs/toolkit";
import { set, update, ref, get, child, getDatabase } from "firebase/database";
import { database } from "../../config";

export const initialState = {
  characters: [],
  favouriteCharacters: [],
  favouriteCharactersId: [],
  loading: true,
  hasErrors: false,
  historial: [],
  nextAddress: "https://rickandmortyapi.com/api/character",
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getCharacters: (state) => {
      state.loading = true;
    },
    getCharactersSuccess: (state, { payload }) => {
      state.characters = [];
      payload.results.forEach((character) => {
        if (!state.favouriteCharactersId.includes(character.id)) {
          const newCharacter = { ...character, comment: "" };
          state.characters.push(newCharacter);
        }
      });
      state.loading = false;
      state.hasErrors = false;
      state.nextAddress = payload.info.next;
    },
    getCharactersFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    getNewCharactersSuccess: (state, { payload }) => {
      state.characters = [...state.characters, ...payload.results];
      state.loading = false;
      state.hasErrors = false;
      state.nextAddress = payload.info.next;
    },
    addFavouriteCharacter: (state, { payload }) => {
      if (!state.favouriteCharactersId.includes(payload.id)) {
        state.favouriteCharactersId.push(payload.id);
        state.favouriteCharacters.push(payload);
        state.characters = state.characters.filter((id) => id !== payload.id);
        state.characters = state.characters.filter(
          (character) => character.id !== payload.id
        );
      }
    },
    removeFavouriteCharacter: (state, { payload }) => {
      state.characters = [payload, ...state.characters];
      state.favouriteCharactersId = state.favouriteCharactersId.filter(
        (id) => id !== payload.id
      );
      state.favouriteCharacters = state.favouriteCharacters.filter(
        (character) => character.id !== payload.id
      );
    },

    addCommentToCharacter: (state, { payload }) => {
      state.favouriteCharacters.forEach((character) => {
        if (character.id == payload.id) {
          character.comment = payload.comment;
        }
      });
    },
    registerAction: (state, { payload }) => {
      // console.log("REGISTER: "+payload);
      state.historial = [payload, ...state.historial]
      // state.historial.push(payload);
    }
  },
});

export default charactersSlice.reducer;

export const charactersSelector = (state) => state.characters;

export const {
  getCharacters,
  getCharactersSuccess,
  getCharactersFailure,
  getNewCharactersSuccess,
  addFavouriteCharacter,
  removeFavouriteCharacter,
  addCommentToCharacter,
  getFavouriteCharacter,
  registerAction,
} = charactersSlice.actions;

export function fetchInitialCharacters() {
  return async (dispatch) => {
    dispatch(getCharacters());

    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      dispatch(getCharactersSuccess(data));
    } catch (error) {
      dispatch(getCharactersFailure());
    }
  };
}

export function fetchFavouriteCharacters() {
  return async (dispatch) => {
    try {
      const reference = ref(getDatabase());

      get(child(reference, "characterID/")).then((snapshot) => {
        snapshot.forEach((item) => {
          dispatch(addFavouriteCharacter(item.val()));
        });
      });
    } catch (error) {
      dispatch(getCharactersFailure());
    }
  };
}

export function fetchNewCharacters() {
  return async (dispatch, getState) => {
    const { nextAddress } = getState().characters;

    dispatch(getCharacters());

    try {
      const response = await fetch(nextAddress);
      const data = await response.json();

      dispatch(getNewCharactersSuccess(data));
    } catch (error) {
      dispatch(getCharactersFailure());
    }
  };
}

export function fetchHistory(){
  return async (dispatch) =>{
    try{
      const reference = ref(getDatabase());
      get(child(reference, "historial/")).then((snapshot) => {
        snapshot.forEach((item) => {
          dispatch(registerAction(item.val()));
        });
      });
    }catch(error){
      dispatch(getCharactersFailure());
    }
  }
}

export function fetchFilteredCharacters(filterAttributes) {
  return async (dispatch) => {
    dispatch(getCharacters());

    var address =
      "https://rickandmortyapi.com/api/character?" +
      "name=" +
      filterAttributes[0] +
      "&species=" +
      filterAttributes[1] +
      "&type=" +
      filterAttributes[2] +
      "&status=" +
      filterAttributes[3] +
      "&gender=" +
      filterAttributes[4];

    try {
      const response = await fetch(address);
      const data = await response.json();

      dispatch(getCharactersSuccess(data));
    } catch (error) {
      dispatch(getCharactersFailure());
    }
  };
}

export function addNewFavouriteCharacter(character) {
  return async (dispatch, getState) => {
    try {
      const reference = ref(database, "characterID/" + character.id);
      set(reference, {
        id: character.id,
        name: character.name,
        image: character.image,
        status: character.status,
        species: character.species,
        gender: character.gender,
        type: character.type,
        origin: character.origin,
        location: character.location,
        comment: "",
      });
      dispatch(addFavouriteCharacter(character));

      // Agregar al historial
      const idGenerado = generateId();
      const action = {id: idGenerado, tipo: "AddedFavourite", descripcion:{character}};
      // console.log(action)
      const referenceHistorial = ref(database, "historial/" + idGenerado);
      set(referenceHistorial, action);
      dispatch(registerAction(action));
    } catch (error) {
      dispatch(getCharactersFailure());
    }
  };
}

export function removeAFavouriteCharacter(character) {
  return async (dispatch) => {
    dispatch(removeFavouriteCharacter(character));

    try {
      const reference = ref(database, "characterID/" + character.id);
      set(reference, null);

      // Agregar al historial
      const idGenerado = generateId();
      const action = {id: idGenerado, tipo: "RemovedFavourite", descripcion:{character}};
      // console.log(action)
      const referenceHistorial = ref(database, "historial/" + idGenerado);
      set(referenceHistorial, action);
      dispatch(registerAction(action));
    } catch (error) {
      dispatch(getCharactersFailure());
    }
  };
}

export function applyCommentToCharacter(item) {
  return async (dispatch) => {
    dispatch(addCommentToCharacter(item));
    try {
      const reference = ref(database, "characterID/" + item.id);
      update(reference, {
        comment: item.comment,
      });

      // Agregar al historial
      const idGenerado = generateId();
      if(item.comment == ""){
        const action = {id: idGenerado, tipo: "RemovedComment", descripcion:{item}};
        console.log(action.descripcion);
        dispatch(registerAction(action));
        const referenceHistorial = ref(database, "historial/" + idGenerado);
        set(referenceHistorial, action);
      }else{
        const action = {id: idGenerado, tipo: "AddedComment", descripcion:{item}};
        console.log(action.descripcion);
        dispatch(registerAction(action));
        const referenceHistorial = ref(database, "historial/" + idGenerado);
        set(referenceHistorial, action);
      }
    } catch (error) {
      console.log(error);
    }
  };
}
function generateId(){
  return Math.floor(Math.random() * 10000);
}