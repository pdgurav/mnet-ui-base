import React from 'react';
import { Box, Button, MnetUIBase, Layer, Select, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';
import { FormClose } from 'grommet-icons';

const customTheme = deepMerge(mnet, {
  layer: {
    border: {
      radius: 'large',
      intelligentRounding: true,
    },
  },
});

export const RoundLayer = () => {
  const [open, setOpen] = React.useState(false);
  const [position, setPosition] = React.useState();
  const [full, setFull] = React.useState();
  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);

  return (
    <MnetUIBase theme={customTheme} full>
      <Box fill align="center" justify="center" gap="medium">
        <Select
          placeholder="Layer position"
          options={[
            'bottom',
            'bottom-left',
            'bottom-right',
            'center',
            'end',
            'hidden',
            'right',
            'start',
            'top',
            'top-left',
            'top-right',
          ]}
          onChange={({ option }) => setPosition(option)}
        />
        <Select
          placeholder="Full"
          options={[
            { label: 'true', value: true },
            { label: 'false', value: false },
            { label: 'vertical', value: 'vertical' },
            { label: 'horizontal', value: 'horizontal' },
          ]}
          labelKey="label"
          valueKey={{ key: 'value' }}
          onChange={({ option }) => setFull(option.value)}
        />
        <Button label="Open layer" onClick={onOpen} />
      </Box>
      {open && (
        <Layer
          full={full}
          position={position}
          onClickOutside={onClose}
          onEsc={onClose}
        >
          <Box
            pad="medium"
            gap="small"
            width={{ min: 'medium' }}
            height={{ min: 'small' }}
            fill
          >
            <Button alignSelf="end" icon={<FormClose />} onClick={onClose} />
            <Text>Hi, I am a Layer!</Text>
          </Box>
        </Layer>
      )}
    </MnetUIBase>
  );
};

RoundLayer.story = {
  name: 'Border Radius',
  parameters: {
    chromatic: { disable: true },
  },
};

export default {
  title: 'Layout/Layer/Round',
};
