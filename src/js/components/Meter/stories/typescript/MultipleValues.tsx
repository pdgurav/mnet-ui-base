import React, { useState } from 'react';

import { Box, Meter, Stack, Text } from 'mnet-ui-base';

export const MultipleValues = () => {
  const total = 100;
  const [active, setActive] = useState(0);
  const [label, setLabel] = useState('');
  const [highlight, setHighlight] = useState(false);

  return (
    <>
      <Box align="center" pad="large">
        <Stack anchor="center">
          <Meter
            type="circle"
            background="light-2"
            values={[
              {
                value: 70,
                onHover: over => {
                  setActive(over ? 70 : 0);
                  setLabel(over ? 'in use' : undefined);
                },
                onClick: () => {
                  setHighlight(() => !highlight);
                },
                highlight,
              },
              {
                value: 30,
                onHover: over => {
                  setActive(over ? 30 : 0);
                  setLabel(over ? 'available' : undefined);
                },
              },
            ]}
            max={100}
            size="small"
            thickness="medium"
          />
          <Box align="center">
            <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
              <Text size="xxlarge" weight="bold">
                {active || total}
              </Text>
              <Text>GB</Text>
            </Box>
            <Text>{label || 'total'}</Text>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

MultipleValues.storyName = 'Multiple values';

export default {
  title: 'Visualizations/Meter/Multiple values',
};
