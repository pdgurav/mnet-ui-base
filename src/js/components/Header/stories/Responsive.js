import React from 'react';

import { MnetUIBase, Header, Anchor, Box, ResponsiveContext, 
  Menu } from 'mnet-ui-base';
import { Grommet as MnetUIBaseIcon, Menu as MenuIcon } from 'grommet-icons';
import { mnet } from 'mnet-ui-base/themes';

export const Responsive = () => (
  <MnetUIBase theme={mnet}>
    <Header background="light-4" pad="medium" height="xsmall">
      <Anchor
        href="https://tools.grommet.io/"
        icon={<MnetUIBaseIcon color="brand" />}
        label="MnetUIBase Tools"
      />
      <ResponsiveContext.Consumer>
        {size =>
          size === 'small' ? (
            <Box justify="end">
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                icon={<MenuIcon color="brand" />}
                items={[
                  {
                    label: <Box pad="small">MnetUIBase.io</Box>,
                    href: 'https://v2.grommet.io/',
                  },
                  {
                    label: <Box pad="small">Feedback</Box>,
                    href: 'https://github.com/grommet/grommet/issues',
                  },
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <Anchor href="https://v2.grommet.io/" label="MnetUIBase.io" />
              <Anchor
                href="https://github.com/grommet/grommet/issues"
                label="Feedback"
              />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </MnetUIBase>
);

export default {
  title: 'Layout/Header/Responsive',
};
