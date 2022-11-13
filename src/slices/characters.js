import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    characters: [],
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
            state.characters = payload.results; // O bien state.characters = [...state.characters, ...payload]
            state.loading = false;
            state.hasErrors = false;
            state.nextAddress = payload.info.next;
            // console.log(payload.info.next);
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
            // console.log(state.characters);
        },
    },
});

export default charactersSlice.reducer;

export const charactersSelector = (state) => state.characters;

export const { getCharacters, getCharactersSuccess, getCharactersFailure, getNewCharactersSuccess} = charactersSlice.actions;

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