import React from 'react';

import { MnetUIBase, Box, Meter } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Pie = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <Meter
        type="pie"
        background="light-2"
        size="small"
        values={[{ value: 70 }, { value: 20 }, { value: 10 }]}
      />
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Visualizations/Meter/Pie',
};
