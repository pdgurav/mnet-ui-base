import React from 'react';

import { Box, Menu, MnetUIBase } from 'mnet-ui-base';
import { Power, User } from 'grommet-icons';

const ReverseMenu = () => (
  <MnetUIBase>
    <Box align="center" pad="large">
      <Menu
        dropProps={{ align: { top: 'bottom', left: 'left' } }}
        label="actions"
        items={[
          { label: 'Home' },
          { label: 'Profile', icon: <User />, gap: 'small' },
          { label: 'Logout', icon: <Power />, reverse: true, gap: 'small' },
        ]}
      />
    </Box>
  </MnetUIBase>
);

export const Reverse = () => <ReverseMenu />;
Reverse.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Menu/Reverse',
};
