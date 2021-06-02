import React from 'react';

import { Box, MnetUIBase, FileInput, Text } from 'mnet-ui-base';
import { Trash } from 'grommet-icons';

const customTheme = {
  fileInput: {
    button: {
      hover: {
        color: 'accent-2',
      },
      border: {
        color: 'skyblue',
        width: '1px',
      },
      pad: {
        vertical: '4px',
        horizontal: '8px',
      },
    },
    background: '#f2f2f2',
    border: { size: 'medium' },
    pad: { horizontal: 'large', vertical: 'medium' },
    round: 'small',
    label: {
      size: 'large',
    },
    icons: {
      remove: Trash,
    },
    dragOver: {
      border: { color: 'focus' },
    },
    hover: {
      border: { color: 'control' },
      extend: `letterSpacing: '0.1em'`,
    },
  },
};

export const Custom = () => (
  <MnetUIBase full theme={customTheme}>
    <Box fill align="center" justify="start" pad="large">
      <Box width="medium">
        <FileInput
          renderFile={file => (
            <Box direction="row" gap="small">
              <Text weight="bold">{file.name}</Text>
              <Text color="text-weak">{file.size} bytes</Text>
            </Box>
          )}
          onChange={event => {
            const fileList = event.target.files;
            for (let i = 0; i < fileList.length; i += 1) {
              const file = fileList[i];
              console.log(file.name);
            }
          }}
        />
      </Box>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Input/FileInput/Custom',
};
