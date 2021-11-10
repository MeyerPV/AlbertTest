import {combineReducers} from '@reduxjs/toolkit';

import {filmsApi} from 'Services/Films';
import {charactersApi} from 'Services/Characters';
import {speciesApi} from 'Services/Species';

export const rootReducer = combineReducers({
  [filmsApi.reducerPath]: filmsApi.reducer,
  [charactersApi.reducerPath]: charactersApi.reducer,
  [speciesApi.reducerPath]: speciesApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
