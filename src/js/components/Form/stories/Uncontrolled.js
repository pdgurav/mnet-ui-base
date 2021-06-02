import React from 'react';

import {
  Box,
  Button,
  CheckBoxGroup,
  Form,
  FormField,
  FileInput,
  MaskedInput,
  RadioButtonGroup,
  RangeInput,
  Select,
  TextArea,
  TextInput,
} from 'mnet-ui-base';

const suggestions = ['Shimi', 'Eric'];

export const Uncontrolled = () => (
  <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
    <Box fill align="center" justify="center">
      <Box width="medium">
        <Form
          onChange={value => console.log('Change', value)}
          onSubmit={event => console.log('Submit', event.value, event.touched)}
        >
          <FormField label="Name" name="name">
            <TextInput name="name" suggestions={suggestions} />
          </FormField>
          <FormField label="Email" name="email" required>
            <MaskedInput
              name="email"
              mask={[
                { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                { fixed: '@' },
                { regexp: /^[\w]+$/, placeholder: 'my' },
                { fixed: '.' },
                { regexp: /^[\w]+$/, placeholder: 'com' },
              ]}
            />
          </FormField>
          <FormField name="subscription">
            <CheckBoxGroup
              name="subscription"
              options={['subscribe', 'receive email notifications']}
            />
          </FormField>
          <FormField name="ampm">
            <RadioButtonGroup name="ampm" options={['morning', 'evening']} />
          </FormField>
          <FormField label="Size" name="size">
            <Select
              name="size"
              multiple
              options={['small', 'medium', 'large']}
            />
          </FormField>
          <FormField label="Comments" name="comments">
            <TextArea name="comments" />
          </FormField>
          <FormField label="Age" name="age" pad>
            <RangeInput name="age" min={15} max={75} />
          </FormField>
          <FormField required label="Image" name="image">
            <FileInput name="image" />
          </FormField>
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button label="Cancel" />
            <Button type="reset" label="Reset" />
            <Button type="submit" label="Update" primary />
          </Box>
        </Form>
      </Box>
    </Box>
  </div>
);

export default {
  title: 'Input/Form/Uncontrolled',
};