import React, {ReactElement, ReactNode} from 'react';
import {View, StyleProp, TextStyle, StyleSheet, ViewStyle} from 'react-native';

import {Text} from './Text';

import {colors} from 'Utils/constants/colors';
import {rem} from 'Utils/dimensions';

interface Props {
  label: ReactNode;
  text: ReactNode;
  textStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
}

export function TextWithLabel({label, text, labelStyle, textStyle, viewStyle}: Props): ReactElement {
  return (
    <View style={[styles.container, viewStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}:</Text>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  label: {
    fontSize: rem(16),
    lineHeight: 24,
    color: colors.black,
    fontWeight: '400',
    marginRight: rem(8),
  },
  text: {
    fontWeight: '700',
    fontSize: rem(18),
    lineHeight: 24,
    color: colors.black,
  },
});
