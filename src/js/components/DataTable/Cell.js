import React, { memo, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { defaultProps } from '../../default-props';

import { Text } from '../Text';
import { StyledDataTableCell } from './StyledDataTable';
import { datumValue, normalizeBackgroundColor } from './buildState';
import { TableContext } from '../Table/TableContext';

const normalizeProp = (name, rowProp, prop) => {
  if (rowProp && rowProp[name]) return rowProp[name];
  return prop;
};

const Cell = memo(
  ({
    background: backgroundProp,
    border,
    column: {
      align,
      pin: columnPin,
      plain,
      footer,
      property,
      render,
      verticalAlign,
      size,
    },
    datum,
    index,
    pad,
    pin: cellPin,
    pinnedOffset,
    primaryProperty,
    rowProp,
    scope,
  }) => {
    const theme = useContext(ThemeContext) || defaultProps.theme;
    const value = datumValue(datum, property);
    const context = useContext(TableContext);
    const renderContexts =
      context === 'body' ||
      (context === 'footer' && footer && footer.aggregate);

    let content;
    if (render && renderContexts) {
      content = render(datum);
    } else if (value !== undefined) {
      content = value;
    }

    if (typeof content === 'string' || typeof content === 'number') {
      const textProps =
        property === primaryProperty ? theme.dataTable.primary : {};
      content = <Text {...textProps}>{content}</Text>;
    }

    const pin = [];
    if (cellPin) pin.push(...cellPin);
    if (columnPin) pin.push('left');

    let background;
    if (pin && theme.dataTable.pinned && theme.dataTable.pinned[context]) {
      background = theme.dataTable.pinned[context].background;
      if (!background.color && theme.background) {
        // theme context has an active background color but the
        // theme doesn't set an explicit color, repeat the context
        // background explicitly
        background = {
          ...background,
          color: normalizeBackgroundColor(theme),
        };
      }
    } else background = undefined;

    return (
      <StyledDataTableCell
        scope={scope}
        {...theme.dataTable[context]}
        align={align}
        context={context}
        verticalAlign={verticalAlign}
        size={size}
        background={
          normalizeProp(
            'background',
            rowProp,
            Array.isArray(backgroundProp)
              ? backgroundProp[index % backgroundProp.length]
              : backgroundProp,
          ) || background
        }
        pinnedOffset={pinnedOffset}
        border={normalizeProp('border', rowProp, border)}
        pad={normalizeProp('pad', rowProp, pad)}
        pin={pin}
        plain={plain ? 'noPad' : undefined}
      >
        {content}
      </StyledDataTableCell>
    );
  },
);

Cell.displayName = 'Cell';

Cell.displayName = 'Cell';

Cell.defaultProps = {};
Object.setPrototypeOf(Cell.defaultProps, defaultProps);

export { Cell };
