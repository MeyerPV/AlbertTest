import {RouteProp, useRoute} from '@react-navigation/native';
import React, {ReactElement} from 'react';
import {Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Divider} from 'react-native-paper';

import {CharacterListItem, EpisodeInfo} from './components';
import {styles} from './styles';

import DarthVaderAvatar from 'Assets/images/DarthVader.jpeg';
import {Text} from 'Components/text';
import {SafeArea} from 'Components/views';
import {HOME_NAVIGATION_ROUTES} from 'Navigation/routes.enum';
import {useGetCharactersByIdsQuery} from 'Services/Characters';
import {useGetFilmByIdQuery} from 'Services/Films';
import {NavigationParamList} from 'Types';
import {colors} from 'Utils/constants/colors';
import {findEntityId} from 'Utils/findEntityId';

export function FilmProfile(): ReactElement {
  const route = useRoute<RouteProp<NavigationParamList, HOME_NAVIGATION_ROUTES.FILM_PROFILE>>();
  const {data} = useGetFilmByIdQuery(route.params.filmId);
  const {data: characters} = useGetCharactersByIdsQuery(
    data?.characters.slice(0, 5).map(character => findEntityId(character)) ?? [],
  );

  return (
    <SafeArea withOffset={false} style={{backgroundColor: colors.darthVaderRed}}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={DarthVaderAvatar} />
      </View>
      <EpisodeInfo title={data?.title} episode_id={data?.episode_id} release_date={data?.release_date} />
      <Divider style={styles.divider} />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.charactersListHeaderText}>Characters</Text>
        {characters?.map(character => (
          <CharacterListItem
            key={character.name}
            name={character.name}
            gender={character.gender}
            speciesIds={character.species.map(value => findEntityId(value))}
          />
        ))}
      </ScrollView>
    </SafeArea>
  );
}
