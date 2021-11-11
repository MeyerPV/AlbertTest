import React, {ReactElement} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

import {rem, vrem} from 'Utils/dimensions';
import {TextWithLabel} from 'Components/text';
import AvatarImage from 'Assets/images/Avatar.png';
import {useGetSpeciesByIdsQuery} from 'Services/Species';

interface ListItemProps {
  name: string;
  gender: string;
  speciesIds: string[];
}

export function CharacterListItem({name, gender, speciesIds}: ListItemProps): ReactElement {
  const {data: species} = useGetSpeciesByIdsQuery(speciesIds);

  return (
    <View style={styles.characterListItemContainer}>
      <Avatar.Image size={60} source={AvatarImage} style={styles.avatar} />
      <View style={styles.characterInfoContainer}>
        <TextWithLabel
          viewStyle={styles.characterInfoTextViewStyle}
          labelStyle={styles.characterInfoLabelStyle}
          label="Title"
          text={name}
          textStyle={styles.characterInfoTextStyle}
        />
        <TextWithLabel
          viewStyle={styles.characterInfoTextViewStyle}
          labelStyle={styles.characterInfoLabelStyle}
          label="Gender"
          text={species}
          textStyle={styles.characterInfoTextStyle}
        />
        <TextWithLabel
          viewStyle={styles.characterInfoTextViewStyle}
          labelStyle={styles.characterInfoLabelStyle}
          label="Species"
          text={gender}
          textStyle={styles.characterInfoTextStyle}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  characterListItemContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: vrem(12),
    paddingHorizontal: rem(16),
  },
  avatar: {
    paddingRight: rem(8),
    alignSelf: 'center',
  },
  characterInfoContainer: {
    flex: 1,
    marginLeft: rem(8),
  },
  characterInfoTextViewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  characterInfoLabelStyle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: rem(20),
    fontWeight: 'bold',
  },
  characterInfoTextStyle: {
    color: 'rgb(20,20,20)',
    fontSize: rem(22),
  },
});
