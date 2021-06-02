import React from 'react';

import { MnetUIBase, Box, Meter } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const VerticalBar = () => {
  const value = 30;

  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <Meter type="bar" value={value} direction="vertical" />
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Visualizations/Meter/Vertical Bar',
};
