import React, { useEffect, useRef, useState } from 'react';

import { Box, Drop, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';

const customTheme = deepMerge(mnet, {
  global: {
    drop: {
      background: { dark: 'neutral-2', light: 'background-contrast' },
      border: { radius: '10px' }, // impacting 'round' behavior
      zIndex: '13',
      elevation: 'large', // impacting the elevation
      margin: 'xsmall',
      intelligentMargin: true,
    },
  },
});

const ThemedDrop = () => {
  const [, setShowDrop] = useState(false);
  const targetRef = useRef();

  useEffect(() => setShowDrop(true), []);
  return (
    <MnetUIBase theme={customTheme} full>
      <Box fill align="center" justify="center">
        <Box
          background="dark-3"
          pad="medium"
          align="center"
          justify="start"
          ref={targetRef}
        >
          Box
        </Box>
        {targetRef.current && (
          <Drop
            align={{ top: 'bottom', left: 'right' }}
            target={targetRef.current}
          >
            <Box pad="small">This Drop uses a custom theme</Box>
          </Drop>
        )}
      </Box>
    </MnetUIBase>
  );
};

export const Themed = () => <ThemedDrop />;
Themed.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Drop/Themed',
};
