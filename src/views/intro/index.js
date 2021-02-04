/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Navigator from '~/navigation/Navigator';

import Styles from './styles';

const Intro = (props: Props): React$Node => {
  
  // // Open New transaction
  function New(): void {
    Navigator.navigateToAndSetStackRoot(props.componentId, Navigator.views.HOME);
  }


  return (
      <View style={Styles.Container}>
        <Text style={[Styles.Text, Styles.MarginTop]}>Intro</Text>
        <TouchableOpacity
          onPress={New}
          style={Styles.Button}>
          <Text style={Styles.Text}>próxima tela</Text>
        </TouchableOpacity>
      </View>
  );
};

export default Intro;
