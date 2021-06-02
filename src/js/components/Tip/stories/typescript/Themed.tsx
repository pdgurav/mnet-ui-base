import React from 'react';

import { Box, Button, MnetUIBase, Tip, Paragraph } from 'mnet-ui-base';
import { ThemeType } from 'mnet-ui-base/themes';

const customTheme: ThemeType = {
  global: {
    font: {
      family: `-apple-system, BlinkMacSystemFont`,
    },
    colors: {
      text: 'white',
    },
  },
  tip: {
    drop: {
      background: { color: 'accent-2', opacity: 0.9 },
      margin: { vertical: 'small' },
      round: 'medium',
      elevation: 'large',
    },
    content: {
      elevation: 'none',
      background: 'none',
      pad: 'xsmall',
    },
  },
};

export const Themed = () => (
  <MnetUIBase full theme={customTheme}>
    <Box align="center" justify="center" fill>
      <Paragraph textAlign="center">
        By default, the Tips content is the driver of the styles. In this themed
        example, we are showing how Drop could be the main driver of the styles
        instead of the content.
      </Paragraph>
      <Tip content="action info">
        <Button label="action" primary />
      </Tip>
    </Box>
  </MnetUIBase>
);

Themed.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Tip/Themed',
};
