import { describe, PropTypes } from 'react-desc';

import {
  backgroundPropType,
  genericProps,
  colorPropType,
  hoverIndicatorPropType,
} from '../../utils/prop-types';
import { getAvailableAtBadge } from '../../utils/mixins';
import { themeDocUtils } from '../../utils/themeDocUtils';

export const doc = Button => {
  const DocumentedButton = describe(Button)
    .availableAt(getAvailableAtBadge('Button', 'Controls'))
    .description('A button.')
    .details(
      `You can provide a single function child that will be called with
      'disabled', 'hover' and 'focus' keys. 
      This allows you to customize the rendering of the Button in those cases.`,
    )
    .usage(
      `import { Button } from 'mnet-ui-base';
<Button primary label='Label' />`,
    )
    .intrinsicElement('button');

  DocumentedButton.propTypes = {
    ...genericProps,
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
      PropTypes.node,
    ]).description(
      `Function that can be called to render the visual representation.
      Button can take in Children as a function, node, or object. 
      For example, 'disabled', 'hover', and 'focus' can be passed as an 
      argument that would then return a react element.
      \`children={({ disabled, hover, focus }) => <Box...>{...}</Box>}\`. 
      When Button has children, it is styled as a \`plain\` button.
      `,
    ),
    active: PropTypes.bool
      .description('Whether the button is active.')
      .defaultValue(false),
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).description(
      `The DOM tag or react component to use for the element.`,
    ),
    badge: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.element,
      PropTypes.number,
      PropTypes.shape({
        background: backgroundPropType,
        max: PropTypes.number,
        value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
      }),
    ])
      .description(
        `An indicator to show on the top-right of the Button. When badge is a 
         boolean, the badge will be a circle with background color 'brand'. 
         When badge is a number, that number will appear inside the badge. When 
         badge is an object, background refers to the background color of the 
         badge, value refers to either the numeric value that appears within 
         the badge or a boolean if background has been defined on the object 
         but no numeric content is desired, and max refers to the max value 
         that can appear inside the badge. For example, if value is 10 and max 
         is 9, the content in the badge will be displayed as 9+. For 
         accessibility, supplement the badge by adding an a11yTitle to the 
         Button which provides a useful message to screen readers. For example, 
         "2 unread notifications".`,
      )
      .defaultValue(undefined),
    color: colorPropType.description(
      `Fill color for primary, label color for plain, border color otherwise.
       If button.default is defined in the theme, the color prop will
       fill the background color for primary and secondary button types. 
       Color prop will change the text color for default button.`,
    ),
    disabled: PropTypes.bool
      .description('Whether the button is disabled.')
      .defaultValue(false),
    fill: PropTypes.oneOfType([
      PropTypes.oneOf(['horizontal', 'vertical']),
      PropTypes.bool,
    ])
      .description(
        `Whether the button expands to fill all of the available width and/or 
        height.`,
      )
      .defaultValue(false),
    focusIndicator: PropTypes.bool
      .description("Whether when 'plain' it should receive a focus outline.")
      .defaultValue(true),
    gap: PropTypes.oneOfType([
      PropTypes.oneOf([
        'none',
        'xxsmall',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
      ]),
      PropTypes.string,
    ])
      .description(
        `The amount of spacing between icon and label in the button.`,
      )
      .defaultValue('small'),
    hoverIndicator: hoverIndicatorPropType
      .description(
        `The hover indicator to apply when the user is mousing over the
button. An object can be also be specified for color index support:
{background: 'neutral-2'}. This prop is meant to be used only
with plain Buttons.`,
      )
      .defaultValue(false),
    href: PropTypes.string.description(
      'If specified, the button will behave like an anchor tag.',
    ),
    icon: PropTypes.element.description(`Icon element to place in the button. 
    For accessibility with screen readers, if using just an icon (no label), 
    add an a11yTitle to the Button that describes the icon.`),
    label: PropTypes.node.description('Label text to place in the button.'),
    onClick: PropTypes.func.description(
      `Click handler. Not setting this property and not specifying a href
        causes the Button to be disabled.`,
    ),
    plain: PropTypes.bool
      .description(
        `Whether this is a plain button with no border or pad.
          Non plain button will show both pad and border.
          The plain button has no border and unless the icon prop exist it has 
          no pad as well. 
          When using the kind button (i.e. button.default on the theme), 
          the usage of plain is deprecated.`,
      )
      .defaultValue(false),
    primary: PropTypes.bool
      .description(
        `Whether this is a primary button. There should be at most one per page
            or screen.`,
      )
      .defaultValue(false),
    reverse: PropTypes.bool
      .description(
        `Whether an icon and label should be reversed so that the icon is at the
              end of the anchor.`,
      )
      .defaultValue(false),
    secondary: PropTypes.bool.description(
      `Whether this is a secondary button.`,
    ),
    size: PropTypes.oneOf(['small', 'medium', 'large']).description(
      `The possible sizes of Button, that impacts the overall Button 
      padding, border radius, text size and line height. 
      'size' will not impact any icon related sizing.`,
    ),
    target: PropTypes.oneOfType([
      PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
      PropTypes.string,
    ]).description(
      `Specifies where to display the URL defined in the href property.`,
    ),
    tip: PropTypes.oneOfType([
      PropTypes.shape({
        content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        dropProps: PropTypes.shape({}),
        plain: PropTypes.bool,
      }),
      PropTypes.string,
    ]).description(`tooltip or a hint when hovering over the button. If the
      value is a string and no a11yTitle value is provided, tip value will be
      used for the a11yTitle default value.`),
    type: PropTypes.oneOf(['button', 'reset', 'submit'])
      .description(
        `The type of button. Set the type to submit for the default button on 
                forms.`,
      )
      .defaultValue('button'),
  };

  return DocumentedButton;
};

export const themeDoc = {
  'global.active.background.color': {
    description: 'The background color when using active prop.',
    type: 'string | { dark: string, light: string }',
    defaultValue: 'active',
  },
  'global.active.background.opacity': {
    description: 'The value used for active button background opacity.',
    type: 'number | string',
    defaultValue: 'medium',
  },
  'global.active.color': {
    description: 'The text color when using active prop.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: 'white', light: 'black' }",
  },
  'global.hover.background': {
    description: 'The background style when hovering.',
    type: 'string | { color: string, opacity: string }',
    defaultValue: "{ color: 'active', opacity: 'medium' }",
  },
  'global.hover.color': {
    description: 'The text color when hovering.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: 'white', light: 'black' }",
  },
  'global.edgeSize.small': {
    description: 'The padding around an icon-only button.',
    type: 'string | { dark: string, light: string }',
    defaultValue: '12px',
  },
  'global.colors.control': {
    description: 'The color of the border.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: 'accent-1', light: 'brand', }",
  },
  'global.colors.brand': {
    description: 'The light version of the border.',
    type: 'string',
    defaultValue: '#7D4CDB',
  },
  'global.colors.text': {
    description: 'The color of the text label.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: '#f8f8f8', light: '#444444' }",
  },
  'text.medium.size': {
    description: 'The font size of the text label.',
    type: 'string',
    defaultValue: '18px',
  },
  'text.medium.height': {
    description: 'The line height of the text label.',
    type: 'string',
    defaultValue: '24px',
  },
  'button.active.background.color': {
    description: `Background color when the button is active.`,
    type: 'string | { dark: string, light: string }',
    defaultValue: undefined,
  },
  'button.active.border.color': {
    description: 'The border color when the button is active.',
    type: 'string | { dark: string, light: string }',
    defaultValue: undefined,
  },
  'button.active.color': {
    description: `Label color when the button is active.`,
    type: 'string | { dark: string, light: string }',
    defaultValue: undefined,
  },
  'button.active.extend': {
    description: 'Any additional style for an active Button.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'button.active.default': {
    description:
      'Adjustments to the default Button style when the Button is active.',
    type: 'object',
    defaultValue: undefined,
  },
  'button.active.primary': {
    description: `Adjustments to the primary Button style when the Button is 
    active. Only relevant for themes that have defined a value for 
    button.default.`,
    type: '{}',
    defaultValue: undefined,
  },
  'button.active.secondary': {
    description: `Adjustments to the secondary Button style when the Button is 
    active. Only relevant for themes that have defined a value for 
    button.default.`,
    type: '{}',
    defaultValue: undefined,
  },
  'button.badge.container.background': {
    description: `The background of the badge.`,
    type: `string | { dark: string, light: string } | {
      color: { dark: string, light: string } | string,
      dark: bool,
      image: string,
      position: string,
      opacity: bool | string,
      repeat: no-repeat | repeat,
      size: cover | contain | string
    }`,
    defaultValue: 'brand',
  },
  'button.badge.container.extend': {
    description: `Any additional styles for the badge.`,
    type: `string | object`,
    defaultValue: undefined,
  },
  'button.badge.container.pad': {
    description: 'When badge has a value, the amount of pad to apply.',
    type: 'string | object',
    defaultValue: undefined,
  },
  'button.badge.size.medium': {
    description: `The minimum width and height of the badge when the badge 
    contains a value. If badge is a boolean, the default width and height will
    be one half of this value.`,
    type: 'string',
    defaultValue: '24px',
  },
  'button.badge.text.size.medium': {
    description: `The size of the text that is mapped according to 
    'button.badge.size.medium'.`,
    type: 'string',
    defaultValue: '14px',
  },
  'button.border.color': {
    description: `The color of the border.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.border.radius': {
    description: 'The corner radius.',
    type: 'string',
    defaultValue: '18px',
  },
  'button.border.width': {
    description: 'The border width.',
    type: 'string',
    defaultValue: '2px',
  },
  'button.color': {
    description: `The color of the text label.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.default.background.color': {
    description: `The color of the background for default buttons.`,
    type: 'string | { dark: string, light: string }',
    defaultValue: undefined,
  },
  'button.default.background.opacity': {
    description: 'The value used for default button background opacity.',
    type: 'number | string',
    defaultValue: undefined,
  },
  'button.default.border.color': {
    description: `The color of the border for default buttons.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.default.color': {
    description: `The color of the label for default buttons.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.default.font.weight': {
    description: `The weight of the text label for default buttons.`,
    type: 'string | number',
  },
  'button.default.extend': {
    description: 'Any additional style for a default button.',
    type: 'string | (props) => {}',
    defaultValue: 'undefined',
  },
  'button.default.padding.horizontal': {
    description: 'The horizontal padding for a default button.',
    type: 'string',
    defaultValue: '22px',
  },
  'button.default.padding.vertical': {
    description: 'The vertical padding for a default button.',
    type: 'string',
    defaultValue: '4px',
  },
  'button.disabled.color': {
    description: `Label color when the button is disabled.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.disabled.border.color': {
    description: 'The border color when the button is disabled.',
    type: 'string | { dark: string, light: string }',
  },
  'button.disabled.background.color': {
    description: `Background color when the button is disabled.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.disabled.opacity': {
    description: 'The opacity when the button is disabled.',
    type: 'number',
    defaultValue: 0.3,
  },
  'button.disabled.extend': {
    description: 'Any additional style for a disabled Button.',
    type: 'string | (props) => {}',
  },
  'button.disabled.default': {
    description:
      'Adjustments to the default Button style when the Button is disabled.',
    type: '{}',
    defaultValue: undefined,
  },
  'button.disabled.primary': {
    description: `Adjustments to the primary Button style when the Button is 
    disabled. Only relevant for themes that have defined a value for 
    button.default.`,
    type: '{}',
    defaultValue: undefined,
  },
  'button.disabled.secondary': {
    description: `Adjustments to the secondary Button style when the Button is 
    disabled. Only relevant for themes that have defined a value for 
    button.default.`,
    type: '{}',
    defaultValue: undefined,
  },
  'button.hover.color': {
    description: `Label color when the button is hovered.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.hover.border.color': {
    description: 'The border color when the button is hovered.',
    type: 'string | { dark: string, light: string }',
  },
  'button.hover.background.color': {
    description: `Background color when the button is hovered.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.hover.extend': {
    description: 'Any additional style for a hovered Button.',
    type: 'string | (props) => {}',
  },
  'button.hover.default': {
    description:
      'Adjustments to the default Button style when the Button is hovered.',
    type: '{}',
    defaultValue: undefined,
  },
  'button.hover.primary': {
    description: `Adjustments to the primary Button style when the Button is 
    hovered. Only relevant for themes that have defined a value for 
    button.default.`,
    type: '{}',
    defaultValue: undefined,
  },
  'button.hover.secondary': {
    description: `Adjustments to the secondary Button style when the Button is 
    hovered. Only relevant for themes that have defined a value for 
    button.default.`,
    type: '{}',
    defaultValue: undefined,
  },
  'button.padding.horizontal': {
    description: 'The horizontal padding.',
    type: 'string',
    defaultValue: '22px',
  },
  'button.padding.vertical': {
    description: 'The vertical padding.',
    type: 'string',
    defaultValue: '4px',
  },
  'button.primary.background.color': {
    description: `The color of the background for primary buttons. Only 
    relevant for themes that have defined a value for button.default.`,
    type: 'string | { dark: string, light: string }',
    defaultValue: undefined,
  },
  'button.primary.background.opacity': {
    description: `The value used for primary button background opacity.
    Only relevant for themes that have defined a value for button.default.`,
    type: 'number | string',
    defaultValue: undefined,
  },
  'button.primary.border.color': {
    description: `The color of the border for primary buttons. Only relevant 
    for themes that have defined a value for button.default.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.primary.color': {
    description: `The color of the label for primary buttons.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.primary.font.weight': {
    description: `The weight of the text label for primary buttons.`,
    type: 'string | number',
  },
  'button.primary.padding.horizontal': {
    description: 'The horizontal padding for a primary button.',
    type: 'string',
    defaultValue: '22px',
  },
  'button.primary.padding.vertical': {
    description: 'The vertical padding for a primary button.',
    type: 'string',
    defaultValue: '4px',
  },
  'button.primary.extend': {
    description: 'Any additional style for a primary button.',
    type: 'string | (props) => {}',
    defaultValue: 'undefined',
  },
  'button.secondary.background.color': {
    description: `The color of the background for secondary buttons. Only 
    relevant for themes that have defined a value for button.default.`,
    type: 'string | { dark: string, light: string }',
    defaultValue: undefined,
  },
  'button.secondary.background.opacity': {
    description: `The value used for secondary button background opacity. 
    Only relevant for themes that have defined a value for button.default.`,
    type: 'number | string',
    defaultValue: undefined,
  },
  'button.secondary.border.color': {
    description: `The color of the border for secondary buttons. Only 
    relevant for themes that have defined a value for button.default.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.secondary.color': {
    description: `The color of the label for secondary buttons. Only 
    relevant for themes that have defined a value for button.default.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.secondary.font.weight': {
    description: `The weight of the text label for secondary buttons. Only 
    relevant for themes that have defined a value for button.default.`,
    type: 'string | number',
  },
  'button.secondary.padding.horizontal': {
    description: `The horizontal padding for a secondary button. Only 
    relevant for themes that have defined a value for button.default.`,
    type: 'string',
    defaultValue: '22px',
  },
  'button.secondary.padding.vertical': {
    description: `The vertical padding for a secondary button. Only 
    relevant for themes that have defined a value for button.default.`,
    type: 'string',
    defaultValue: '4px',
  },
  'button.secondary.extend': {
    description: `Any additional style for a secondary button. Only 
    relevant for themes that have defined a value for button.default.`,
    type: 'string | (props) => {}',
    defaultValue: 'undefined',
  },
  'button.size.small.border.radius': {
    description: 'The border corner radius.',
    type: 'string',
    defaultValue: '18px',
  },
  'button.size.small.pad.horizontal': {
    description: 'The pad',
    type: 'string',
    defaultValue: '20px',
  },
  'button.size.small.pad.vertical': {
    description: 'The pad',
    type: 'string',
    defaultValue: '4px',
  },
  'button.size.medium.border.radius': {
    description: 'The border corner radius.',
    type: 'string',
    defaultValue: '18px',
  },
  'button.size.medium.pad.horizontal': {
    description: 'The pad',
    type: 'string',
    defaultValue: '22px',
  },
  'button.size.medium.pad.vertical': {
    description: 'The pad',
    type: 'string',
    defaultValue: '4px',
  },
  'button.size.large.border.radius': {
    description: 'The border corner radius.',
    type: 'string',
    defaultValue: '24px',
  },
  'button.size.large.pad.horizontal': {
    description: 'The pad',
    type: 'string',
    defaultValue: '32px',
  },
  'button.size.large.pad.vertical': {
    description: 'The pad',
    type: 'string',
    defaultValue: '8px',
  },
  'button.transition.duration': {
    description: `The length of time it will take for the element to transition
between two states.`,
    type: 'number',
    defaultValue: 0.1,
  },
  'button.transition.properties': {
    description: 'The CSS properties you want to add the transition to.',
    type: 'string[]',
    defaultValue: "['color', 'background-color', 'border-color', 'box-shadow']",
  },
  'button.transition.timing': {
    description: `Describes how a transition will progress over one cycle of its
duration and allowing it to change speed during its course.`,
    type: 'string',
    defaultValue: 'ease-in-out',
  },
  'button.extend': {
    description: 'Any additional style for the Button.',
    type: 'string | (props) => {}',
  },
  'tip.content': {
    description:
      'When using tip prop, any valid Box property for the Tip container.',
    type: 'object',
    defaultValue: `{ background: 'background-contrast', elevation: 'small', 
    margin: 'xsmall', pad: { vertical: 'xsmall', horizontal: 'small' }, 
    round: 'small'}`,
  },
  'tip.drop': {
    description:
      'When using tip prop, any valid Drop property for the Tooltip.',
    type: 'object',
    defaultValue: "{align: { top: 'bottom' }}",
  },
  ...themeDocUtils.focusStyle,
  ...themeDocUtils.disabledStyle,
};
