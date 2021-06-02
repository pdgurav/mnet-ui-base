import React, { useState } from 'react';

import { Box, Calendar } from 'mnet-ui-base';

export const Simple = () => {
  const [date, setDate] = useState();

  const onSelect = nextDate => {
    setDate(nextDate !== date ? nextDate : undefined);
  };

  return (
    <>
      <Box align="center" pad="large">
        <Calendar
          date={date}
          onSelect={onSelect}
          size="small"
          bounds={['2018-09-08', '2020-12-13']}
        />
      </Box>
      <Box align="center" pad="large">
        <Calendar
          date={date}
          daysOfWeek
          onSelect={onSelect}
          size="small"
          bounds={['2020-09-08', '2025-12-13']}
        />
      </Box>
    </>
  );
};

export default {
  title: 'Visualizations/Calendar/Simple',
};
