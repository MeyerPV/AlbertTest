import {format} from 'date-fns';
import React, {ReactElement} from 'react';
import {View, StyleSheet} from 'react-native';

import {TextWithLabel} from 'Components/text';
import {colors} from 'Utils/constants/colors';
import {standardDateFormat} from 'Utils/constants/date';
import {rem, vrem} from 'Utils/dimensions';

interface EpisodeInfoProps {
  title?: string;
  episode_id?: number;
  release_date?: string | null;
}

export function EpisodeInfo({title, episode_id, release_date = null}: EpisodeInfoProps): ReactElement {
  return (
    <View style={styles.episodeInfoContainer}>
      <TextWithLabel
        viewStyle={styles.episodeInfoTextViewStyle}
        labelStyle={styles.episodeInfoTextStyle}
        label="Title"
        text={title}
        textStyle={styles.episodeInfoTextStyle}
      />
      <TextWithLabel
        viewStyle={styles.episodeInfoTextViewStyle}
        labelStyle={styles.episodeInfoTextStyle}
        label="Episode"
        text={episode_id}
        textStyle={styles.episodeInfoTextStyle}
      />
      <TextWithLabel
        viewStyle={styles.episodeInfoTextViewStyle}
        labelStyle={styles.episodeInfoTextStyle}
        label="Release Date"
        text={format(new Date(release_date), standardDateFormat)}
        textStyle={styles.episodeInfoTextStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  episodeInfoContainer: {
    flex: 1,
    marginHorizontal: rem(24),
    marginBottom: vrem(16),
    maxHeight: vrem(120),
  },
  episodeInfoTextViewStyle: {
    marginVertical: vrem(6),
    flex: 1,
  },
  episodeInfoTextStyle: {
    color: colors.white,
    fontSize: rem(24),
  },
});
