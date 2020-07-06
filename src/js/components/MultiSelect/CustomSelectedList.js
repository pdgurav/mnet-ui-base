import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Close } from 'grommet-icons/icons/Close';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { Searchbox } from './Searchbox';
import {
  OptionsBox,
  OptionWrapper,
  OptionText,
  OptionLabel,
} from './StyledMultiSelect';

const SelectedList = ({
  selectedItems,
  isInclude,
  onValueChange,
  renderSearch,
  searchPlaceholder,
  onRemove,
  renderEmptySelected,
  width,
}) => {
  const theme = useContext(ThemeContext) || defaultProps.theme;
  const [search, setSearch] = React.useState('');

  const filteredItems = selectedItems.filter(val => val.includes(search));

  const renderClearButton = () => (
    <Button
      focusIndicator={false}
      onClick={() => onValueChange({ isInclude: null, values: [] })}
      plain
    >
      <Box
        border={{
          side: 'bottom',
          color: theme.multiselect.chips.clear.color,
        }}
      >
        <Text {...theme.multiselect.chips.clear}>CLEAR ALL</Text>
      </Box>
    </Button>
  );

  return (
    <OptionsBox style={{ height: '100%' }}>
      {selectedItems && selectedItems.length > 0 && (
        <>
          <Box {...theme.multiselect.rightPanel.incExcHeader.box}>
            <Text {...theme.multiselect.rightPanel.incExcHeader.text}>
              {isInclude ? 'Included List' : 'Excluded List'}
            </Text>
            {renderClearButton()}
          </Box>
          {renderSearch && (
            <Searchbox
              placeholder={searchPlaceholder}
              value={search}
              onValueChange={val => setSearch(val)}
            />
          )}
          <OptionWrapper
            width={width}
            {...theme.multiselect.chips.wrapper}
            wrap
          >
            {filteredItems.map((val, id) => (
              <OptionText
                key={`${id}-${val}`}
                incExcVal
                {...theme.multiselect.chips.option}
              >
                <OptionLabel
                  value={isInclude}
                  {...theme.multiselect.chips.label}
                >
                  <Text color={isInclude ? 'accent-1' : 'brand'}>{val}</Text>
                </OptionLabel>
                <Close
                  onClick={() => onRemove(val)}
                  {...theme.multiselect.chips.icon}
                />
              </OptionText>
            ))}
          </OptionWrapper>
        </>
      )}
      <Box align="center" justify="center" fill>
        {!selectedItems.length && renderEmptySelected}
      </Box>
    </OptionsBox>
  );
};

export default React.memo(SelectedList);
