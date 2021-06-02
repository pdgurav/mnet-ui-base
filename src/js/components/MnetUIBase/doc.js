import { describe, PropTypes } from 'react-desc';

import { backgroundDoc } from '../../utils/prop-types';
import { getAvailableAtBadge } from '../../utils/mixins';

export const doc = MnetUIBase => {
  const DocumentedMnetUIBase = describe(MnetUIBase)
    .availableAt(getAvailableAtBadge('MnetUIBase', 'Utilities'))
    .description('The top level MnetUIBase container.')
    .usage(
      `import { MnetUIBase } from 'mnet-ui-base';
<MnetUIBase>...</MnetUIBase>`,
    )
    .intrinsicElement('div');

  DocumentedMnetUIBase.propTypes = {
    background: backgroundDoc,
    dir: PropTypes.oneOf(['rtl']).description(
      'Layout direction for right to left contexts',
    ),
    full: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['min'])])
      .description(
        `Whether to take the whole viewport. 'min' indicates it should
        take at minimum the whole viewport, allowing the viewport to
        control scrolling.`,
      )
      .defaultValue(false),
    plain: PropTypes.bool
      .description(
        `Whether or not MnetUIBase should apply a global font-family, font-size,
        and line-height.`,
      )
      .defaultValue(false),
    cssVars: PropTypes.bool
      .description('Whether to expose the css variables.')
      .defaultValue(false),
    theme: PropTypes.object.description(
      'Custom styles for MnetUIBase app component.',
    ),
    themeMode: PropTypes.oneOf(['dark', 'light']).description(
      `Dark vs. light theme variation. Default is unspecified and left to
      theme.`,
    ),
    userAgent: PropTypes.string.description(
      `User agent used to detect the device width for setting the initial
      breakpoint.`,
    ),
    containerTarget: PropTypes.object.description(
      `The node where Drop and Layer containers are inserted. Defaults to
      document.body which is almost always the right choice. This is used
      for less common cases like rendering within an internal node (e.g.
      shadow root).`,
    ),
  };

  return DocumentedMnetUIBase;
};

export const themeDoc = {
  'mnet.extend': {
    description: 'Any additional style for MnetUIBase.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'global.font.face': {
    description: 'Custom font face declaration',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
};
