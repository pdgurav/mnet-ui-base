import React from 'react';

import { ThemeType } from 'mnet-ui-base/themes';
import { Box, Button, mnet, MnetUIBase } from 'mnet-ui-base';
import { Alert, Filter, Notification, MailOption } from 'grommet-icons';
import { deepMerge } from 'mnet-ui-base/utils';

// Type annotations can only be used in TypeScript files.
// Remove ': ThemeType' if you are not using Typescript.
const customTheme: ThemeType = deepMerge(mnet, {
  button: {
    default: {},
    hover: {
      default: { background: 'background-contrast' },
      secondary: {
        border: {
          width: '3px',
        },
      },
    },
    secondary: {
      border: {
        color: '#2196f3',
        width: '2px',
      },
    },
    border: {
      radius: '4px',
    },
    size: {
      medium: {
        pad: {
          vertical: '6px',
          horizontal: '12px',
        },
      },
    },
  },
});

export const Badge = () => (
  <>
    <MnetUIBase theme={mnet}>
      <Box direction="row" align="center" pad="medium" gap="medium">
        <Button
          a11yTitle="2 Available Updates"
          label="Updates"
          onClick={() => {}}
          badge={2}
        />
        <Button
          a11yTitle="Settings, 1 Alert"
          label="Settings"
          onClick={() => {}}
          badge={
            <Box background="status-critical" pad="xsmall" round="xsmall">
              <Alert size="small" />
            </Box>
          }
        />
        <Button
          a11yTitle="20 Unread Notifications"
          icon={<Notification />}
          onClick={() => {}}
          badge={{
            value: 20,
            max: 15,
          }}
          hoverIndicator
        />
        <Button
          a11yTitle="20 Unread Emails"
          icon={<MailOption />}
          onClick={() => {}}
          badge
          hoverIndicator
        />
      </Box>
    </MnetUIBase>
    <MnetUIBase theme={customTheme}>
      <Box direction="row" align="center" pad="medium" gap="medium">
        <Button
          a11yTitle="2 Updates Available"
          label="Updates"
          onClick={() => {}}
          badge={2}
          secondary
        />
        <Button
          a11yTitle="100 Unread Notifications"
          label="Notifications"
          onClick={() => {}}
          badge={
            <Box background="status-critical" pad="xsmall" round="xsmall">
              <Alert size="small" />
            </Box>
          }
          secondary
        />
        <Button
          a11yTitle="100 Filters Applied"
          icon={<Filter />}
          onClick={() => {}}
          badge={{
            background: 'status-warning',
            value: 100,
          }}
          secondary
        />
        <Button
          a11yTitle="20 Unread Notifications"
          icon={<Notification />}
          onClick={() => {}}
          badge={20}
          hoverIndicator
        />
        <Button
          a11yTitle="20 Unread Emails"
          icon={<MailOption />}
          onClick={() => {}}
          badge
          hoverIndicator
        />
      </Box>
    </MnetUIBase>
  </>
);

export default {
  title: 'Controls/Button/Badge',
};
