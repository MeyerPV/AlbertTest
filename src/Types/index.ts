import {HOME_NAVIGATION_ROUTES} from 'Navigation/routes.enum';

export interface ResponseWithPagination<T> {
  count: number;
  next: number | null;
  previous: number | null;
  results: T[];
}

export interface Response<T> {
  data: T;
}

export type NavigationParamList = {
  [HOME_NAVIGATION_ROUTES.FILM_PROFILE]: {
    filmId: number;
  };
};
