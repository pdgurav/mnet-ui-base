import React from 'react';

import { mnet, Box, Button, MnetUIBase, Tip } from 'mnet-ui-base';

export const Simple = () => (
  <MnetUIBase full theme={mnet}>
    <Box align="center" justify="center" fill>
      <Tip content="action info">
        <Button label="action" />
      </Tip>
    </Box>
  </MnetUIBase>
);

Simple.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Tip/Simple',
};
