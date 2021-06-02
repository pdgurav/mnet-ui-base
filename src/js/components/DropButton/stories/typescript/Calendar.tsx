import React, { useState } from 'react';
import { FormDown } from 'grommet-icons';

import { 
  Box,
  Calendar,
  DropButton,
  Text,
  MnetUIBase,
  mnet,
} from 'mnet-ui-base';

const CalendarDropButton = () => {
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);

  const onSelect = selectedDate => {
    setDate(selectedDate);
    setOpen(false);
  };

  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <DropButton
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          dropContent={<Calendar date={date} onSelect={onSelect} />}
        >
          <Box direction="row" gap="medium" align="center" pad="small">
            <Text>
              {date ? new Date(date).toLocaleDateString() : 'Select date'}
            </Text>
            <FormDown color="brand" />
          </Box>
        </DropButton>
      </Box>
    </MnetUIBase>
  );
};

export const CalendarDrop = () => <CalendarDropButton />;
CalendarDrop.parameters = {
  chromatic: { disable: true },
};

CalendarDrop.storyName = 'Calendar';

export default {
  title: 'Controls/DropButton/Calendar',
};
