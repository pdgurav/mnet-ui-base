import React from 'react';

import { Trash } from 'grommet-icons';

import { 
  Box,
  Button,
  Heading,
  Layer,
  Select,
  Text,
  MnetUIBase,
  mnet,
} from 'mnet-ui-base';

export const CenterLayer = () => {
  const [open, setOpen] = React.useState();
  const [open2, setOpen2] = React.useState();

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);

  const onOpen2 = () => setOpen2(true);

  const onClose2 = () => setOpen2(undefined);

  return (
    <MnetUIBase theme={mnet}>
    <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
      <Box fill align="center" justify="center">
        <Button
          icon={<Trash />}
          label={
            <Text>
              <strong>Remove</strong>
            </Text>
          }
          onClick={onOpen}
          plain
        />
      </Box>
      {open && (
        <Layer position="center" onClickOutside={onClose} onEsc={onClose}>
          <Box pad="medium" gap="small" width="medium">
            <Heading level={3} margin="none">
              Confirm
            </Heading>
            <Text>Are you sure you want to delete?</Text>
            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="end"
              pad={{ top: 'medium', bottom: 'small' }}
            >
              <Button label="Open 2" onClick={onOpen2} color="dark-3" />
              <Button
                label={
                  <Text color="white">
                    <strong>Delete</strong>
                  </Text>
                }
                onClick={onClose}
                primary
                color="status-critical"
              />
            </Box>
          </Box>
        </Layer>
      )}
      {open2 && (
        <Layer position="top" onClickOutside={onClose2} onEsc={onClose2}>
          <Box pad="medium" gap="small" width="medium">
            <Heading level={3} margin="none">
              Confirm 2
            </Heading>
            <Select options={['one', 'two', 'three']} />
            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="end"
              pad={{ top: 'medium', bottom: 'small' }}
            >
              <Button label="Close" onClick={onClose2} color="dark-3" />
            </Box>
          </Box>
        </Layer>
      )}
    </div>
    </MnetUIBase>
  );
};

CenterLayer.storyName = 'Center';

CenterLayer.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Layout/Layer/Center',
};
