/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import Home from '../views/home';
import Intro from '../views/intro';

import {Store} from '../store/Store';
import type {Node} from 'react';
import Navigator from './Navigator';

class Register {
  static Resolver(view: any): function {
    return (): Node => view.component;
  }

  static Register(view: any): any {
    return Navigation.registerComponentWithRedux(
      view.name,
      Register.Resolver(view),
      Provider,
      Store,
    );
  }

  static init() {
    // $FlowFixMe
    return [
      {
        component: Home,
        name: Navigator.views.HOME,
      },
      {
        component: Intro,
        name: Navigator.views.INTRO,
      },
    ].map(Register.Register);
  }
}

export default Register;
