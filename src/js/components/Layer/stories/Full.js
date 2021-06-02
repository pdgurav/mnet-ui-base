import React from 'react';

import { Box, Button, Layer, MnetUIBase, mnet } from 'mnet-ui-base';

export const FullLayer = () => {
  const [showLayer, setShowLayer] = React.useState(false);

  return (
    <MnetUIBase theme={mnet}>
      <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
        <Box
          pad="small"
          fill
          background="dark-3"
          align="center"
          justify="center"
        >
          <Button
            primary
            color="accent-3"
            label="Show"
            onClick={() => setShowLayer(true)}
          />
          {showLayer && (
            <Layer full animation="fadeIn">
              <Box fill background="light-4" align="center" justify="center">
                <Button
                  primary
                  label="Close"
                  onClick={() => setShowLayer(false)}
                />
              </Box>
            </Layer>
          )}
        </Box>
      </div>
    </MnetUIBase>
  );
};

FullLayer.storyName = 'Full';

FullLayer.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Layout/Layer/Full',
};
