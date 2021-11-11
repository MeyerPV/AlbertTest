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
