import * as React from 'react';
import { ThemeType } from '../../themes';
import { BackgroundType } from '../../utils';

export interface MnetUIBaseProps {
  background?: BackgroundType;
  containerTarget?: HTMLElement;
  cssVars?: boolean;
  dir?: 'rtl';
  full?: boolean | 'min';
  plain?: boolean;
  theme?: ThemeType;
  themeMode?: 'dark' | 'light';
  userAgent?: string;
}

export interface MnetUIBaseExtendedProps
  extends MnetUIBaseProps,
    Omit<JSX.IntrinsicElements['div'], 'dir'> {}

declare const MnetUIBase: React.FC<MnetUIBaseExtendedProps>;

export { MnetUIBase };
