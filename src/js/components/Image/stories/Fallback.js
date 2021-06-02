import React from 'react';

import { Image } from 'mnet-ui-base';

export const Fallback = () => (
  <>
    <Image
      fallback="//v2.grommet.io/assets/IMG_4245.jpg"
      src="//v2.grommet.io/assets/IMG_4245_not_exists.jpg"
    />
  </>
);

export default {
  title: 'Media/Image/Fallback',
};
