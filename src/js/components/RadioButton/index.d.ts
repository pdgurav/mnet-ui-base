import * as React from 'react';
import { A11yTitleType } from '../../utils';

export interface RadioButtonProps {
  a11yTitle?: A11yTitleType;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  label?: React.ReactNode;
  name: string;
}

export interface RadioButtonExtendedProps
  extends RadioButtonProps,
    Omit<JSX.IntrinsicElements['input'], 'name'> {}

declare const RadioButton: React.FC<RadioButtonExtendedProps>;

export { RadioButton };
