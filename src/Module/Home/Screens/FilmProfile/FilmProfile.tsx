import React, {ReactElement} from 'react';
import {Image, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {Divider} from 'react-native-paper';
import {format} from 'date-fns';

import {styles} from './styles';
import {CharacterListItem} from './components/CharacterListItem';

import {findEntityId} from 'Utils/findEntityId';
import {SafeArea} from 'Components/views';
import DarthVaderAvatar from 'Assets/images/DarthVader.jpeg';
import {colors} from 'Utils/constants/colors';
import {TextWithLabel, Text} from 'Components/text';
import {NavigationParamList} from 'Types';
import {HOME_NAVIGATION_ROUTES} from 'Navigation/routes.enum';
import {useGetFilmByIdQuery} from 'Services/Films';
import {useGetCharactersByIdsQuery} from 'Services/Characters';
import {standardDateFormat} from 'Utils/constants/date';

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
      <View style={styles.episodeInfoContainer}>
        <TextWithLabel
          viewStyle={styles.episodeInfoTextViewStyle}
          labelStyle={styles.episodeInfoTextStyle}
          label="Title"
          text={data?.title}
          textStyle={styles.episodeInfoTextStyle}
        />
        <TextWithLabel
          viewStyle={styles.episodeInfoTextViewStyle}
          labelStyle={styles.episodeInfoTextStyle}
          label="Episode"
          text={data?.episode_id}
          textStyle={styles.episodeInfoTextStyle}
        />
        <TextWithLabel
          viewStyle={styles.episodeInfoTextViewStyle}
          labelStyle={styles.episodeInfoTextStyle}
          label="Release Date"
          text={format(new Date(data?.release_date ?? null), standardDateFormat)}
          textStyle={styles.episodeInfoTextStyle}
        />
      </View>
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
