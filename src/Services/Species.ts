import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {baseUrl, URLS} from 'Utils/constants/urls';

export const speciesApi = createApi({
  reducerPath: 'speciesApi',
  baseQuery: fetchBaseQuery({baseUrl: `${baseUrl}${URLS.species}`}),
  endpoints: builder => ({
    getSpeciesByIds: builder.query<string, string[]>({
      queryFn: async (speciesIds, _queryApi, _extraOptions, baseQuery) => {
        const results = await Promise.all(speciesIds.map(speciesId => baseQuery(`/${speciesId}`)));

        const merged = [...results.map(result => result.data?.name ?? '')].join(',');
        const errors = [...results.filter(result => result.error != null).map(result => result.error)];

        if (errors.length > 0) return {error: errors};

        return {data: merged};
      },
    }),
  }),
});

export const {useGetSpeciesByIdsQuery} = speciesApi;
