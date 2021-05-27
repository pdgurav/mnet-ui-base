/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';

import { Box } from '../Box';
import { Select } from '../Select';

import { ColumnSelect } from './ColumnSelect';
import { ValueLabelWithIcon } from './ValueLabelWithIcon';
import { applyKey } from './utils';

const MultiSelect = ({
  width,
  height,
  options,
  value: valueProp,
  labelKey,
  valueKey,
  onValueChange,
  layout,
  onSearch,
  searchPlaceholder,
  emptySearchMessage,
  withSelectAll,
  withOptionChips,
  withUpdateCancelButtons,
  searchable,
  custom,
  withInclusionExclusion,
  isExcluded: isExcludedProp,
  onIncExcChange,
  renderEmptySelected,
  gridArea,
  validate,
  size,
  isOpenState,
  isEnableOutSideClick,
  shouldRenderInDrop,
  placeholder,
  delimiter,
  ...rest
}) => {
  const [internalValue, updateInternalValue] = useState(valueProp);
  const [internalIsExcluded, updateInternalIsExcluded] = useState(
    isExcludedProp,
  );
  const [isOpen, updateIsOpen] = useState(isOpenState || false);
  const [search, updateSearch] = useState('');
  const [searchArray, updateSearchArray] = useState([]);

  const isExcluded = withUpdateCancelButtons
    ? internalIsExcluded
    : isExcludedProp;

  const value = withUpdateCancelButtons ? internalValue : valueProp;

  useEffect(() => {
    if (!isOpen && withUpdateCancelButtons) {
      updateInternalValue(valueProp);
    }
  }, [isOpen, valueProp, withUpdateCancelButtons]);

  const onClose = () => {
    if (withInclusionExclusion) {
      updateInternalValue(valueProp);
      updateInternalIsExcluded(isExcludedProp);
    }
    updateIsOpen(false);
  };

  const onOpen = () => {
    if (withInclusionExclusion) {
      updateInternalValue(valueProp);
      updateInternalIsExcluded(isExcludedProp);
    }
    updateIsOpen(true);
  };

  const onIncludeExclude = newValue => {
    const updater = withUpdateCancelButtons
      ? updateInternalIsExcluded
      : onIncExcChange;
    updater(newValue);
  };

  const onCancelClick = () => {
    onClose();
  };

  const onOkClick = () => {
    onValueChange(value);
    if (onIncExcChange) {
      onIncExcChange(isExcluded);
    }
    updateIsOpen(false);
  };

  const getValue = (index, array, param) => applyKey(array[index], param);

  const onSearchChange = searchInput => {
    const escapedText = searchInput.replace(/[-\\^$*+?.()[\]{}]/g, '\\$&');
    if (delimiter) {
      if (searchInput === '') {
        updateSearchArray([]);
      } else {
        const escapedTextSplit = escapedText
          .split(delimiter)
          .map(item => item.trim());
          updateSearchArray(escapedTextSplit);
      }
    }
    updateSearch(escapedText);
  };

  const getOptions = useCallback(() => {
    if (delimiter) {
      if (searchArray.length === 0) {
        return options;
      }
      return options.filter(item =>
        searchArray.some(searchEl => {
          const exp = new RegExp(`^${searchEl}$`, 'i');
          return exp.test(item.label);
        }),
      );
    } else {
      if (!search) {
        return options;
      }
      const exp = new RegExp(search, 'i');
      return options.filter((item, index) =>
        exp.test(getValue(index, options, labelKey)),
      );
    }
  }, [options, search]);

  const getOptionsNotMatchingSearch = useCallback(() => {
    if (delimiter) {
      if (!searchArray.length) {
        return [];
      }
      const filteredOptions = options.filter(
        item =>
          !searchArray.some(searchEl => {
            const exp = new RegExp(`^${searchEl}$`, 'i');
            return exp.test(item.label);
          }),
      );
      return filteredOptions;
    } else {
      if (!search) {
        return [];
      }
      const exp = new RegExp(search, 'i');
      return options.filter(
        (item, index) => !exp.test(getValue(index, options, labelKey)),
      );
    }
  }, [options, search]);

  const onSelectValueChange = ({ value: newValue }) => {
    const valuesNotMatchingSearch = getOptionsNotMatchingSearch()
      .filter((item, index, opt) =>
        value.includes(getValue(index, opt, valueKey)),
      )
      .map((item, index, opt) => getValue(index, opt, valueKey));

    const updater = withUpdateCancelButtons
      ? updateInternalValue
      : onValueChange;
    updater([...valuesNotMatchingSearch, ...newValue]);
  };

  const renderContent = props => {
    if (['single-column', 'double-column'].includes(layout)) {
      return (
        <ColumnSelect
          layout={layout}
          width={width}
          height={height}
          onOk={onOkClick}
          onCancel={onCancelClick}
          onChange={onSelectValueChange}
          emptySearchMessage={emptySearchMessage}
          showSelectAll={withSelectAll}
          showOptionChips={withOptionChips}
          showControlButtons={withUpdateCancelButtons}
          inclusionExclusion={withInclusionExclusion}
          isExcluded={isExcluded}
          setIncExcVal={onIncludeExclude}
          renderSearch={searchable && !onSearch}
          searchPlaceholder={searchPlaceholder}
          searchValue={search}
          onSearchChange={onSearchChange}
          renderEmptySelected={renderEmptySelected}
          onValueChange={onValueChange}
          custom={custom}
          validate={validate}
          {...props}
        />
      );
    }
    return null;
  };

  const renderLabel = () => {
    return (
      <ValueLabelWithIcon
        withInclusionExclusion={withInclusionExclusion}
        isExcluded={isExcluded}
        size={size}
        placeholder={placeholder}
        value={value}
      />
    );
  };

  return (
    <Box width={width} gridArea={gridArea}>
      <Select
        multiple
        value={value}
        options={getOptions()}
        onChange={onSelectValueChange}
        open={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        closeOnChange={false}
        renderCustomContent={
          ['single-column', 'double-column'].includes(layout)
            ? props => renderContent(props)
            : undefined
        }
        valueLabel={renderLabel()}
        labelKey={labelKey}
        valueKey={valueKey}
        onSearch={onSearch}
        searchPlaceholder={searchPlaceholder}
        emptySearchMessage={emptySearchMessage}
        isEnableOutSideClick={isEnableOutSideClick}
        shouldRenderInDrop={shouldRenderInDrop}
        size={size}
        {...rest}
      />
    </Box>
  );
};

MultiSelect.displayName = 'MultiSelect';

let MultiSelectDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  MultiSelectDoc = require('./doc').doc(MultiSelect);
}
const MultiSelectWrapper = MultiSelectDoc || MultiSelect;

export { MultiSelectWrapper as MultiSelect };