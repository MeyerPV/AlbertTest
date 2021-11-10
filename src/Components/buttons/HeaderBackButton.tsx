import React, {ReactElement} from 'react';
import {GestureResponderEvent, StyleProp, TextStyle, Pressable} from 'react-native';

import {BackButtonIcon} from 'Components/icons';

interface ButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<TextStyle>;
}

export function HeaderBackButton({onPress, style}: ButtonProps): ReactElement {
  return (
    <Pressable onPress={onPress} style={style} hitSlop={20}>
      <BackButtonIcon />
    </Pressable>
  );
}
