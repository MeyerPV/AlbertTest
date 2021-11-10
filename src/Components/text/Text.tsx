import React, {ReactElement, ReactNode} from 'react';
import {Text as BasicText, StyleProp, TextStyle, StyleSheet} from 'react-native';

import {colors} from 'Utils/constants/colors';
import {rem} from 'Utils/dimensions';

interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export function Text({style, children}: Props): ReactElement {
  return (
    <BasicText numberOfLines={2} style={[styles.text, style]}>
      {children}
    </BasicText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    fontSize: rem(16),
    lineHeight: 24,
    color: colors.black,
  },
});
