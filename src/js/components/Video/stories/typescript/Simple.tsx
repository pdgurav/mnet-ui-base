import React from 'react';

import { Box, MnetUIBase, Video } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Simple = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <Video>
        <source src="small.mp4" type="video/mp4" />
        <source
          src="http://techslides.com/demos/sample-videos/small.webm"
          type="video/webm"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.ogv"
          type="video/ogg"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.3gp"
          type="video/3gp"
        />
      </Video>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Media/Video/Simple',
};
