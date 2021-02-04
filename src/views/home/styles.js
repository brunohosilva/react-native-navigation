/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {StyleSheet} from 'react-native';
import Colors from '~/lib/Colors';

export default StyleSheet.create({
  Container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: Colors.Default,
  },

  Button: {
    alignItems: 'center',
    backgroundColor: Colors.Rose,
    borderRadius: 100,
    height: 45,
    justifyContent: 'center',
    width: 150,
  },

  Text: {
    fontSize: 16,
    color: Colors.White,
  },
  
  MarginTop: {
    marginBottom: 30,
  },
});
