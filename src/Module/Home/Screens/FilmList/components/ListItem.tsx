import {format} from 'date-fns';
import React, {ReactElement} from 'react';
import {GestureResponderEvent, Pressable, StyleSheet} from 'react-native';

import {rem, vrem} from 'Utils/dimensions';
import {colors} from 'Utils/constants/colors';
import {TextWithLabel} from 'Components/text';
import {standardDateFormat} from 'Utils/constants/date';

interface ListItemProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  episode_id: number;
  release_date: string;
}

export function FilmListItem({onPress, title, episode_id, release_date}: ListItemProps): ReactElement {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? colors.red : colors.white,
        },
        styles.listItemPressable,
      ]}
      onPress={onPress}>
      <TextWithLabel label="Title" text={title} />
      <TextWithLabel label="Episode" text={`№${episode_id}`} />
      <TextWithLabel label="Release Date" text={format(new Date(release_date), standardDateFormat)} />
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  listItemPressable: {
    paddingVertical: vrem(14),
    paddingHorizontal: rem(32),
  },
});
