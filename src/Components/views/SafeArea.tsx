import React, {ReactElement, ReactNode} from 'react';
import {SafeAreaView, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {colors} from 'Utils/constants/colors';
import {vrem} from 'Utils/dimensions';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  withOffset?: boolean;
}

export function SafeArea({children, style, withOffset = true}: Props): ReactElement {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={[styles.wrapper, withOffset ? {marginVertical: vrem(24)} : {}]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
  },
});
