import {Dimensions, Platform} from 'react-native';
import {isTablet} from 'react-native-device-info';

// Size const
const MOCK_WIDTH = isTablet() ? 768 : 375;
export const screenWidth = Dimensions.get('window').width;
export const rem = (remValue = 1) => (remValue * screenWidth) / MOCK_WIDTH; // root element

const MOCK_HEIGHT = isTablet() ? 1024 : 812;
export const screenHeight = Dimensions.get('window').height;
export const vrem = (remValue = 1) => (remValue * screenHeight) / MOCK_HEIGHT;
export const vh = (vhValue = 1) => (vhValue * screenHeight) / 100; // 1 vhValue is 1% of screen height

export function workletRem(remValue = 1) {
  'worklet';
  return (remValue * screenWidth) / MOCK_WIDTH;
}
export function workletVrem(remValue = 1) {
  'worklet';
  return (remValue * screenHeight) / MOCK_HEIGHT;
}

export const TOP_SAFE_AREA = Platform.OS === 'ios' ? 47 : 0;

export const HEADER_HEIGHT = vrem(64);
