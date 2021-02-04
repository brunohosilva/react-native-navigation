/**
 * @author Fábio Pereira <fabio.pereira@climatempo.com.br>
 * @copyright Climatempo
 * @flow
 */
import React from 'react';
import {View, TouchableOpacity, Text, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Navigation} from 'react-native-navigation';

import Colors from '~/lib/Colors';
import type {BarProps} from './_types';
import type {Node} from 'react';
import Styles from './styles';

const Bar = (props: BarProps): Node => {
  const Color = props.color ? {backgroundColor: props.color} : null;
  const TitleColor = props.titleColor ? {color: props.titleColor} : null;
  const ArrowColor = props.arrowColor ? props.arrowColor : Colors.Black;

  function Back() {
    MenuEvents.ArrowBackBar();
    try {
      Keyboard.dismiss();
      props.isModal
        ? Navigation.dismissModal(props.componentId)
        : Navigation.pop(props.componentId);
    } catch (e) {}
  }

  function Right(): Node | null {
    if (!props.right) {
      return null;
    }

    return props.right;
  }

  return (
    <View style={[Styles.Container, Color]}>
      <TouchableOpacity onPress={Back} style={Styles.Buttom}>
        <Icon
          name="md-arrow-back"
          size={30}
          color={ArrowColor}
          style={Styles.Center}
        />
      </TouchableOpacity>
      <View style={Styles.Title}>
        <Text style={[Styles.Text, TitleColor]}>{props.title}</Text>
      </View>
      {Right()}
    </View>
  );
};

export default Bar;
