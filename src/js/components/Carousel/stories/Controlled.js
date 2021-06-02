import React from 'react';
import { Attraction, Car, TreeOption } from 'grommet-icons';

import { MnetUIBase, Box, Button, Carousel, Text } from 'mnet-ui-base';

export const Controlled = () => {
  const [activeSlide, setActiveSlide] = React.useState(2);

  return (
    <MnetUIBase>
      <Box align="center" pad="large">
        <Box direction="row" gap="small" align="center">
          <Button label="-" onClick={() => setActiveSlide(activeSlide - 1)} />
          <Text>{activeSlide}</Text>
          <Button label="+" onClick={() => setActiveSlide(activeSlide + 1)} />
        </Box>
        <Carousel activeChild={activeSlide} onChild={setActiveSlide}>
          <Box pad="xlarge" background="accent-1">
            <Attraction size="xlarge" />
          </Box>
          <Box pad="xlarge" background="accent-2">
            <TreeOption size="xlarge" />
          </Box>
          <Box pad="xlarge" background="accent-3">
            <Car size="xlarge" />
          </Box>
        </Carousel>
      </Box>
    </MnetUIBase>
  );
};
Controlled.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Media/Carousel/Controlled',
};
