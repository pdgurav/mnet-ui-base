import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, TextInput } from 'mnet-ui-base';
import { hb } from 'mnet-ui-base-theme-hb';
import { Text } from '../../Text';


const ThemedTextInput = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);
  

  return (
    <MnetUIBase full theme={hb}>
      <Box justify="start" pad="large">
        <Box pad="medium">
          <Text>Ad Unit Name</Text>
        </Box>
        <Box width="large" height="40px">
          <TextInput
            custom
            value={value}
            plain={Boolean(value)}
            onChange={onChange}
          />
        </Box>
      </Box>
      <Box justify="start" pad="large">
        <Box pad="medium">
          <Text>Div Id</Text>
        </Box>
        <Box width="medium" height="40px">
          <TextInput
            custom
            pad="xxlarge"
            margin="xxlarge"
            value={value}
            plain={Boolean(value)}
            error
            onChange={onChange}
          />
        </Box>
      </Box>
      <Box justify="start" pad="large">
        <Box pad="medium">
          <Text>Div Id</Text>
        </Box>
        <Box width="medium" height="40px">
          <TextInput
            pad="xxlarge"
            margin="xxlarge"
            value={value}
            plain={Boolean(value)}
            error
            onChange={onChange}
          />
        </Box>
      </Box>
    </MnetUIBase>
  );
};

storiesOf('TextInput', module).add('HBThemed', () => <ThemedTextInput />);
