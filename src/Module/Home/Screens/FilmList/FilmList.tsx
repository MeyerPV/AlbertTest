import {useNavigation} from '@react-navigation/native';
import React, {ReactElement} from 'react';
import {FlatList} from 'react-native';
import {Divider} from 'react-native-paper';

import {FilmListItem} from './components/ListItem';

import {SafeArea} from 'Components/views';
import {HOME_NAVIGATION_ROUTES} from 'Navigation/routes.enum';
import {useGetFilmsQuery} from 'Services/Films';
import {vrem} from 'Utils/dimensions';

const ITEM_HEIGHT = vrem(100);

export function FilmList(): ReactElement {
  const navigation = useNavigation();
  const {data, isLoading, refetch} = useGetFilmsQuery();

  function navigateToFilmProfile(filmId: number): () => void {
    return (): void => {
      navigation.navigate(HOME_NAVIGATION_ROUTES.FILM_PROFILE, {filmId});
    };
  }

  return (
    <SafeArea>
      <FlatList
        initialNumToRender={10}
        data={data?.results ?? []}
        keyExtractor={item => `${item.title}/${item.episode_id}`}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        onRefresh={refetch}
        refreshing={isLoading}
        renderItem={({item, index}) => (
          <FilmListItem
            onPress={navigateToFilmProfile(index)}
            title={item.title}
            episode_id={item.episode_id}
            release_date={item.release_date}
          />
        )}
        ItemSeparatorComponent={() => <Divider />}
      />
    </SafeArea>
  );
}
