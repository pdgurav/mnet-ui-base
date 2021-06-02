import React, { useState } from 'react';

import { Box, Calendar, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Multiple = () => {
  const [dates, setDates] = useState([]);

  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <Calendar
          dates={dates}
          onSelect={date => {
            const nextDates = [...dates];
            const index = nextDates.indexOf(date);
            if (index === -1) {
              nextDates.push(date);
            } else {
              nextDates.splice(index, 1);
            }
            setDates(nextDates);
            console.log('Select', date, nextDates);
          }}
          bounds={['2020-09-08', '2025-12-13']}
        />
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Visualizations/Calendar/Multiple',
};
