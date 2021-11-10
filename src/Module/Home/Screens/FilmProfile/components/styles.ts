import {StyleSheet} from 'react-native';

import {rem, vrem} from 'Utils/dimensions';

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
