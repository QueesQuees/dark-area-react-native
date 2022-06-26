import {Dimensions, PixelRatio} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export default function getScreenRatio(): number {
  const DESIGN_RESOLUTION = 375;
  let ratio = 1;

  if (windowWidth >= 428) {
    ratio = (428 / DESIGN_RESOLUTION) * 1.01;
  } else if (windowWidth >= 414) {
    ratio = 414 / DESIGN_RESOLUTION;
  } else if (windowWidth >= 390) {
    ratio = 390 / DESIGN_RESOLUTION;
  }

  return ratio;
}

export function getPixelRatio(): number {
  return PixelRatio.get() > 2.5 ? PixelRatio.get() / 2.5 : 1;
}
