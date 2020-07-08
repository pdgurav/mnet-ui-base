import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FormCheckmark } from 'grommet-icons/icons/FormCheckmark';
import { FormClose } from 'grommet-icons/icons/FormClose';

import { Box } from '../Box';
import { Text } from '../Text';

import { CheckBoxWrapper, CheckBox } from './StyledMultiSelect';

const OptionWithCheckControl = ({
  selected,
  label,
  inclusionExclusion,
  isExcluded,
  onSelect,
}) => {
  const theme = useContext(ThemeContext) || defaultProps.theme;

  const selectOptionsStyle = {
    ...theme.select.options.box,
    ...theme.select.options.container,
  };

  const renderCheckbox = (check, exc) => {
    return (
      <CheckBoxWrapper {...theme.multiselect.checkbox.box}>
        <CheckBox
          {...theme.multiselect.checkbox.check}
          active={selected || (inclusionExclusion && isExcluded === null)}
          isExcluded={exc}
          onClick={
            (inclusionExclusion && isExcluded === null) ?
              event => onSelect(event, exc) : undefined
          }
        >
          {(selected || (inclusionExclusion && isExcluded === null)) && (
            <>
              {check === 'check' && (
                <FormCheckmark {...theme.multiselect.checkbox.checkmark} />
              )}
              {check === 'cross' && (
                <FormClose {...theme.multiselect.checkbox.checkmark} />
              )}
            </>
          )}
        </CheckBox>
      </CheckBoxWrapper>
    );
  };

  return (
    <Box {...selectOptionsStyle} selected={selected}>
      <Box {...theme.multiselect.option}>
        <Box direction="row">
          {!inclusionExclusion && renderCheckbox('check', null)}
          <Text {...theme.select.options.text}>{label}</Text>
        </Box>
        {inclusionExclusion && (
          <Box direction="row">
            {
              [null, false].includes(isExcluded)
              && renderCheckbox('check', false)
            }
            {
              [null, true].includes(isExcluded)
              && renderCheckbox('cross', true)
            }
          </Box>
        )}
      </Box>
    </Box>
  );
}

export { OptionWithCheckControl };
