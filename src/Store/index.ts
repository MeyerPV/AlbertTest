import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {rootReducer} from './reducers';

import {filmsApi} from 'Services/Films';
import {charactersApi} from 'Services/Characters';
import {speciesApi} from 'Services/Species';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(filmsApi.middleware).concat(charactersApi.middleware).concat(speciesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);

export default store;
