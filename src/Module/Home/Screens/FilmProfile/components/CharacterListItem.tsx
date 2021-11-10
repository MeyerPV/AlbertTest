import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {Avatar} from 'react-native-paper';

import {styles} from './styles';

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
