import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {baseUrl, URLS} from 'Utils/constants/urls';
import {Character} from 'Types/Character';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({baseUrl: `${baseUrl}${URLS.people}`}),
  endpoints: builder => ({
    getCharactersByIds: builder.query<Character[], string[]>({
      queryFn: async (characterIds, _queryApi, _extraOptions, baseQuery) => {
        const results = await Promise.all(characterIds.map(characterId => baseQuery(`/${characterId}`)));

        const merged = [...results.map(result => result.data)];
        const errors = [...results.filter(result => result.error != null).map(result => result.error)];

        if (errors.length > 0) return {error: errors};

        return {data: merged};
      },
    }),
  }),
});

export const {useGetCharactersByIdsQuery} = charactersApi;
