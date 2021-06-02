import React, { useState } from 'react';

import { Box, Button, CheckBoxGroup, Form, FormField, 
  MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const FormControlled = () => {
  const [value, setValue] = useState();

  return (
    <MnetUIBase theme={mnet}>
      <Box pad="medium" width="medium">
        <Form
          onSubmit={({ value: values, touched }) =>
            // 'touched' is a single boolean value indication of
            // whether any of the checkboxes had changed.
            console.log('Submit', values, touched)
          }
        >
          <FormField id="check-box-formfield-id" name="controlled">
            <CheckBoxGroup
              id="check-box-group-id"
              name="controlled"
              aria-labelledby="check-box-formfield-id"
              value={value}
              onChange={({ value: nextValue }) => setValue(nextValue)}
              options={['Maui', 'Jerusalem', 'Wuhan']}
            />
          </FormField>
          <Button type="submit" label="Submit" />
        </Form>
      </Box>
    </MnetUIBase>
  );
};

FormControlled.storyName = 'Form controlled';

export default {
  title: 'Input/CheckBoxGroup/Form controlled',
};
