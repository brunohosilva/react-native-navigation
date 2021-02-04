/* eslint-disable sort-keys */
/**
 * @author Fábio Pereira <fabio.pereira@climatempo.com.br>
 */
import {isIphoneX} from 'react-native-iphone-x-helper';
import {Platform, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export default {
  // Determines if current device is a IphoneX
  IS_IPHONE_X: isIphoneX(),

  // Terms and conditions URL
  TERMS: 'https://assetslite.climatempo.com.br/termos',

  // Podcasts URL
  PODCASTS: 'https://climatempo.com.br/podcasts?hideHeaderAndFooter=true',

  // Gateway URL
  URL: '/services',
  BASE_URL: 'https://ms-gateway.climatempo.com.br',

  // Stores
  // eslint-disable-next-line prettier/prettier
  GOOGLE_STORE: 'https://play.google.com/store/apps/details?id=com.mobimidia.climaTempo',
  APPLE_STORE: 'https://itunes.apple.com/us/app/climatempo/id407856257?mt=8',

  // Custom bar size
  BAR_HEIGHT: Platform.select({
    android: 50,
    ios: isIphoneX() ? 100 : 65,
  }),

  PEDAGUA_URL: 'https://pedagua.climatempo.com.br',

  // SVG properties
  ASPECT_RATIO: 1.7,
  SVG_WIDTH: 414,
  SVG_HEIGHT: 233.88,

  // URL MAP
  URL_MAP: 'https://www.climatempo.com.br/mapas?hide=true',

  // Min screen size to show chart and Image/Ad at same time
  MIN_SCREEN_SIZE: 667,
  BREAK_POINT: 700,

  // Min screen size to show banners inside fifteen days
  MIN_SCREEN_WIDTH: 350,

  // AD HEIGHT
  AD_HEIGHT: height >= 700 ? 233 : 230,
};
