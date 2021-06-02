import React from 'react';

import { Box, MnetUIBase, Video } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const SimpleVideo = props => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <Video {...props}>
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

export const ControlsBelow = () => <SimpleVideo controls="below" />;

ControlsBelow.storyName = 'Controls below';

export default {
  title: 'Media/Video/Controls below',
};