import React, { useState } from 'react';

import { MnetUIBase, Box, List } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const locations = [
  'Boise',
  'Fort Collins',
  'Los Gatos',
  'Palo Alto',
  'San Francisco',
];

export const Order = () => {
  const [ordered, setOrder] = useState(locations);
  return (
    <MnetUIBase theme={mnet} role="application">
      <Box align="center" pad="large">
        <List data={ordered} onOrder={setOrder} />
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Visualizations/List/Order',
};
