/* eslint-disable no-console */
/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {createStore, compose, applyMiddleware} from 'redux';

export default (reducers: any, middleware: any): any => {
  // $FlowFixMe
  const enhancer: boolean =  applyMiddleware(...middleware)

  return createStore(reducers, enhancer);
};
