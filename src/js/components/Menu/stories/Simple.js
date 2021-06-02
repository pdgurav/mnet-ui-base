import React from 'react';

import { Box, Menu, MnetUIBase } from 'mnet-ui-base';

const SimpleMenu = () => (
  <MnetUIBase>
    <Box align="center" pad="large">
      <Menu
        dropProps={{
          align: { top: 'bottom', left: 'left' },
          elevation: 'xlarge',
        }}
        label="actions"
        items={[
          { label: 'Launch', onClick: () => {} },
          { label: 'Abort', onClick: () => {} },
          { label: 'Disabled', disabled: true },
        ]}
      />
    </Box>
  </MnetUIBase>
);

export const Simple = () => <SimpleMenu />;
Simple.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Menu/Simple',
};
