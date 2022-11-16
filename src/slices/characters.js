import { createSlice } from "@reduxjs/toolkit";
import { onValue, set, getDatabase, update, ref } from "firebase/database";
import database from "../../config";



export const initialState = {
    characters: [],
    favouriteCharacter: [],
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
        saveFavouriteCharacter: (state, { payload }) => {
            state.favouriteCharacter = payload;
        }
    },
});

export default charactersSlice.reducer;

export const charactersSelector = (state) => state.characters;

export const { getCharacters, getCharactersSuccess, getCharactersFailure, getNewCharactersSuccess, saveFavouriteCharacter} = charactersSlice.actions;

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

export function writeFavouriteCharacter(character) {
    return async (dispatch, getState) => {
        
        // console.log(character);
        dispatch(saveFavouriteCharacter(character));
        
        try{

            const db = getDatabase();
            const reference = ref(db, 'characterID/'+character.id);
            set(ref(db, reference, {
                character: "Goku",
            // characterName: character.name,
            // characterImage: character.image,
            // characterStatus: character.status,
            // characterSpecies: character.species,
            // characterGender: character.gender,
            // characterType: character.type,
            // characterOrigin: character.origin,
            // characterLocation: character.location,
            }));
        } catch(error) {
            dispatch(getCharactersFailure());
        }


    }
}