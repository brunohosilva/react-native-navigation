/**
 * @author Fábio Pereira <fabio.pereira.gti@climatempo.com.br>
 * @copyright Climatempo
 * @flow
 */
import {StyleSheet, Platform} from 'react-native';
import Colors from '~/lib/Colors';
import Constants from '~/config/Constants';

export default StyleSheet.create({
  Buttom: {
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    top: Platform.select({
      android: 0,
      ios: Constants.IS_IPHONE_X ? 30 : 20,
    }),
    width: 50,
    zIndex: 99,
  },

  Center: {
    alignSelf: 'center',
  },

  Container: {
    backgroundColor: Colors.Denim,
    flex: 1,
    flexDirection: 'row',
    maxHeight: Platform.select({
      android: 65,
      ios: Constants.IS_IPHONE_X ? 90 : 65,
    }),
    paddingTop: Platform.select({
      android: 0,
      ios: 20,
    }),
    width: '100%',
  },

  Text: {
    alignSelf: 'center',
    color: Colors.White,
    fontSize: 18,
    fontWeight: 'bold',
  },

  Title: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: Platform.select({
      android: 0,
      ios: Constants.IS_IPHONE_X ? 20 : 0,
    }),
  },
});
