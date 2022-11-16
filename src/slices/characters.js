import { createSlice } from "@reduxjs/toolkit";
import { onValue, set, update, ref, get, child } from "firebase/database";
import { database } from "../../config";



export const initialState = {
    characters: [],
    favouriteCharacters: [],
    favouriteCharactersId: [],
    loading: true,
    hasErrors: false,
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
            state.characters = payload.results;
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
            if(!state.favouriteCharactersId.includes(payload.id)){
                payload.comment = "";
                state.favouriteCharactersId.push(payload.id);
                state.favouriteCharacters.push(payload);
            };
        },
        removeFavouriteCharacter: (state, { payload }) => {
            state.favouriteCharactersId = state.favouriteCharactersId.filter((id) => id !== payload.id);
            state.favouriteCharacters = state.favouriteCharacters.filter((character) => character.id !== payload.id);
        },
        addCommentToCharacter: (state, { payload }) => {
            // console.log(payload.comment);
            state.favouriteCharacters = state.favouriteCharacters.map((character) => {
                if(character.id === payload.id){
                    character.comment = payload.comment;
                }
                return character;
            });
        }
    },
});

export default charactersSlice.reducer;

export const charactersSelector = (state) => state.characters;

export const { getCharacters, getCharactersSuccess, getCharactersFailure, getNewCharactersSuccess, addFavouriteCharacter, removeFavouriteCharacter, addCommentToCharacter} = charactersSlice.actions;


export function fetchInitialCharacters() {
    return async (dispatch) => {
        
        dispatch(getCharacters());

        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();

            dispatch(getCharactersSuccess(data));

            const reference = ref(database, "caracterID");
            // console.log("reference: "+reference);
            get(child(reference, "caracterID/"))
            .then( (snapshot) => {
                console.log(snapshot);
                snapshot.forEach((character) => {
                    addFavouriteCharacter(character);
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
        dispatch(addFavouriteCharacter(character));
        // console.log(getState().characters.favouriteCharactersId);
        try{
            const reference = ref(database, 'characterID/'+character.id);
            // console.log(reference);
            set(reference, {
                characterName: character.name,
                characterImage: character.image,
                characterStatus: character.status,
                characterSpecies: character.species,
                characterGender: character.gender,
                characterType: character.type,
                characterOrigin: character.origin,
                characterLocation: character.location,
            });
        } catch(error) {
            dispatch(getCharactersFailure());
        }
    }
}

export function removeAFavouriteCharacter(character){
    return async (dispatch, getState) => {
        dispatch(removeFavouriteCharacter(character));

        try{
            const reference = ref(database, 'characterID/'+character.id);
            set(reference, null);
        } catch(error) {
            dispatch(getCharactersFailure());
        }
    }
}