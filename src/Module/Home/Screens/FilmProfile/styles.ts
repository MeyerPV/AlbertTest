import {StyleSheet} from 'react-native';

import {colors} from 'Utils/constants/colors';
import {rem, TOP_SAFE_AREA, vrem} from 'Utils/dimensions';

export const styles = StyleSheet.create({
  imageContainer: {
    height: vrem(280),
  },
  image: {
    height: vrem(300),
    width: '100%',
    position: 'absolute',
    top: -TOP_SAFE_AREA,
  },
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
  divider: {
    marginBottom: 16,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  charactersListHeaderText: {
    color: colors.white,
    fontSize: rem(30),
    lineHeight: vrem(30),
  },
});
