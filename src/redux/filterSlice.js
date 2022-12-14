import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: { 
        filter: '',
    },
    reducers: {
        filterContacts(state, action) {
            return {
                ...state,
                filter: action.payload
            };
        },
    }    
})

export const { filterContacts } = filterSlice.actions;
export const filter = filterSlice.reducer;