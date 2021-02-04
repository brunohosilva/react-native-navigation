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
import Bar from '~/components/Bar';

import Styles from './styles';

const Home = (props: Props): React$Node => {
  
    // // Open New transaction
  function Intro(): void {
    Navigator.modal(props.componentId, Navigator.views.INTRO);
  }


  return (
    <View style={Styles.Container}>
      <Bar
          componentId={props.componentId}
          title={translate('favorites')}
          isModal={props.isModal}
          right={Button}
          color={Colors.Denim}
          titleColor={Colors.White}
          arrowColor={Colors.White}
        />
        <Text style={[Styles.Text, Styles.MarginTop]}>HOME</Text>
        <TouchableOpacity
          onPress={Intro}
          style={Styles.Button}>
          <Text style={Styles.Text}>próxima tela</Text>
        </TouchableOpacity>
      </View>
  );
};

export default Home;
