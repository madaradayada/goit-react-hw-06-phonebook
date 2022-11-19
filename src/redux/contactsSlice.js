import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        addContactItem(state, action) {
            state.contacts.push({
                id: nanoid(5),
                ...action.payload,
            })
        },
        onDeleteContact(state, action) {
//state.contacts = state.contacts.filter(item => item.id !== action.payload); //запись изменения стейта используя IMMER
            return {
                ...state,
                contacts: state.contacts.filter(item => item.id !== action.payload)
            };
        },
    }
});

//конфигурация для reducer 
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['contacts'], //сохранить только контакты 
};

export const contactReducer = persistReducer(
	persistConfig,
    contactsSlice.reducer,    
);

export const { addContactItem, onDeleteContact} = contactsSlice.actions;