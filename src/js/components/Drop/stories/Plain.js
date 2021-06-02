import React, { useEffect, useRef, useState } from 'react';

import { Box, Drop, MnetUIBase, mnet } from 'mnet-ui-base';

const PlainDrop = () => {
  const targetRef = useRef();

  const [, setShowDrop] = useState(false);
  useEffect(() => setShowDrop(true), []);
  return (
    <MnetUIBase theme={mnet}>
      <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
        <Box background="brand" fill align="center" justify="center">
          <Box
            background="dark-3"
            pad="medium"
            align="center"
            justify="start"
            ref={targetRef}
          >
            Target
          </Box>
          {targetRef.current && (
            <Drop
              plain
              align={{ top: 'bottom', left: 'left' }}
              target={targetRef.current}
            >
              <Box pad="large">No background no shadow</Box>
            </Drop>
          )}
        </Box>
      </div>
    </MnetUIBase>
  );
};

export const Plain = () => <PlainDrop />;
Plain.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Drop/Plain',
};
