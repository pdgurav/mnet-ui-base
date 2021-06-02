import React from 'react';

import { Box, Layer, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const MarginLayer = ({ margin, ...rest }) => (
  <MnetUIBase theme={mnet}>
    <Layer
      margin={
        margin || { left: '40px', top: '50px', right: '30px', bottom: '10px' }
      }
      {...rest}
    >
      <Box height="small" overflow="auto">
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
      </Box>
    </Layer>
  </MnetUIBase>
);

export const Margin = () => <MarginLayer full />;

export default {
  title: 'Layout/Layer/Margin',
};
