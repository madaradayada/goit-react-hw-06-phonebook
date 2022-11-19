import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: { 
        filter: '',//начальное значение поля 'filter'
    },
    reducers: {
        filterContacts(state, action) {
// state.filter = action.payload;//запись изменения стейта используя IMMER
            return {
                ...state,
                filter: action.payload
            };
        },
    }    
})

export const { filterContacts } = filterSlice.actions;
export const filter = filterSlice.reducer;