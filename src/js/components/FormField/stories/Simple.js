import React, { useState } from 'react';

import { Box, FormField, Select, MnetUIBase, mnet } from 'mnet-ui-base';

const allOptions = Array(100)
  .fill()
  .map((_, i) => `option ${i + 1}`);

export const Simple = () => {
  const [value, setValue] = useState('');

  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <FormField label="Label" htmlFor="select">
          <Select
            id="select"
            placeholder="placeholder"
            options={allOptions}
            value={value}
            onChange={({ option }) => setValue(option)}
          />
        </FormField>
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Input/FormField/Simple',
};
