import {PixelRatio, Dimensions, ToastAndroid, Platform} from 'react-native';
import dayjs from 'dayjs';

export const DESIGN_WIDTH = 430;

export const deviceWidth = () => Dimensions.get('window').width;

export const deviceHeight = () => Dimensions.get('window').height;

export const widthPercentage = (value: number) => (deviceWidth() * value) / 100;

export const heightPercentage = (value: number) =>
  (deviceHeight() * value) / 100;

export const scale = (size: number | undefined): number | undefined => {
  if (typeof size !== 'number') {
    return size;
  }
  return Math.round(
    PixelRatio.roundToNearestPixel((size * deviceWidth()) / DESIGN_WIDTH),
  );
};

export const showToast = (message: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      80,
    );
  }
};

export const opacityColor = (color: string, value: number) => {
  const opacity = Math.floor(0.1 * value * 255).toString(16);
  return color + opacity;
};

export const currencyConverter = (amount: number, withoutRp?: boolean) => {
  const _amount = amount < 0 ? 0 : amount;

  return `${withoutRp ? '' : 'Rp '}${String(_amount).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    '.',
  )}`;
};

export const dateFormat = (date: string, format: string) => {
  return dayjs(date).format(format);
};

export const jsonToUrlParams = (jsonObject: any) => {
  let newJson = {};
  const keys = jsonObject ? Object.keys(jsonObject) : [];
  for (var i in keys) {
    if (jsonObject[keys[i]]) {
      newJson[keys[i]] = jsonObject[keys[i]];
    }
  }
  const params = new URLSearchParams(newJson);
  return params;
};