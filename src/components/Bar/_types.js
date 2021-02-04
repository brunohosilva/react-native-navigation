/**
 * @author Fábio Pereira <fabio.pereira@climatempo.com.br>
 * @copyright Climatempo
 * @flow
 */

import type {Node} from 'react';

export type BarProps = {
  componentId: string,
  title: string,
  isModal: boolean,
  right?: Node,
  arrowColor?: string,
  titleColor?: string,
  color?: string,
};
