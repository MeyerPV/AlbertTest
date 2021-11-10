import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {baseUrl, URLS} from 'Utils/constants/urls';
import {Film} from 'Types/Film';
import {ResponseWithPagination} from 'Types';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({baseUrl: `${baseUrl}${URLS.films}`}),
  endpoints: builder => ({
    getFilms: builder.query<ResponseWithPagination<Film>, void>({
      query: () => '',
    }),
    getFilmById: builder.query<Film, number>({
      query: filmId => `/${filmId}`,
    }),
  }),
});

export const {useGetFilmsQuery, useGetFilmByIdQuery} = filmsApi;
