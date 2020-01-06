import React from 'react';
import { storiesOf } from '@storybook/react';

import { mnet, Box, Button, MnetUIBase } from 'mnet-ui-base';

const FillButtons = props => (
  <MnetUIBase theme={mnet}>
    <Box pad="medium" justify="center" direction="row">
      <Box justify="center" align="center" pad="medium" gap="medium">
        <Box
          border
          justify="center"
          align="center"
          height="100px"
          width="300px"
        >
          <Button label="False" onClick={() => {}} {...props} />
        </Box>
        <Box
          border
          justify="center"
          align="center"
          height="100px"
          width="300px"
        >
          <Button label="True" fill onClick={() => {}} {...props} />
        </Box>
        <Box
          border
          justify="center"
          align="center"
          height="100px"
          width="300px"
        >
          <Button
            label="Horizontal"
            fill="horizontal"
            onClick={() => {}}
            {...props}
          />
        </Box>
        <Box
          border
          justify="center"
          align="center"
          height="100px"
          width="300px"
        >
          <Button
            label="Vertical"
            fill="vertical"
            onClick={() => {}}
            {...props}
          />
        </Box>
      </Box>

      <Box
        pad="medium"
        justify="center"
        align="center"
        height="700px"
        width="300px"
        gap="medium"
      >
        <Button label="False" onClick={() => {}} {...props} />
        <Button label="True" fill onClick={() => {}} {...props} />
        <Button
          label="Horizontal"
          fill="horizontal"
          onClick={() => {}}
          {...props}
        />
        <Button
          label="Vertical"
          fill="vertical"
          onClick={() => {}}
          {...props}
        />
      </Box>
    </Box>
  </MnetUIBase>
);

storiesOf('Button', module).add('Fill', () => <FillButtons />);
