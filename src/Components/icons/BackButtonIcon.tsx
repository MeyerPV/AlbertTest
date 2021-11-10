import React, {ReactElement} from 'react';
import {StyleSheet} from 'react-native';
import {SvgCss} from 'react-native-svg';

import {rem} from 'Utils/dimensions';
import BackArrowSvg from 'Assets/icons/BackArrowSvg';

export function BackButtonIcon(): ReactElement {
  return <SvgCss style={styles.backButton} xml={BackArrowSvg} />;
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: rem(24),
  },
});
