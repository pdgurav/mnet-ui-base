import React from 'react';

import { Box, Calendar } from 'mnet-ui-base';

export const Range = () => (
  <>
    <Box align="center" pad="large">
      <Calendar date={[['2020-04-03', '2020-04-08']]} range />
    </Box>
  </>
);

export default {
  title: 'Visualizations/Calendar/Range',
};
