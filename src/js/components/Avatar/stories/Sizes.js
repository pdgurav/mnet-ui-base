import React from 'react';

import { Avatar, Box, MnetUIBase } from 'mnet-ui-base';
import { grommet } from 'mnet-ui-base/themes';

export const Sizes = () => {
  const src = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';
  return (
    <MnetUIBase theme={mnet}>
      <Box direction="row" pad="large" gap="small">
        <Avatar size="small" src={src} />
        <Avatar size="medium" src={src} />
        <Avatar size="large" src={src} />
        <Avatar size="xlarge" src={src} />
      </Box>
      <Box direction="row" pad="large" align="center" gap="small">
        <Avatar background="dark-2" size="small">
          S
        </Avatar>
        <Avatar background="dark-2" size="medium">
          LS
        </Avatar>
        <Avatar background="dark-2" size="large">
          JF
        </Avatar>
        <Avatar background="dark-2" size="xlarge">
          SY
        </Avatar>
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Visualizations/Avatar/Sizes',
};
