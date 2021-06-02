import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { MnetUIBase } from '../../MnetUIBase';
import { CheckBox } from '..';

describe('CheckBox', () => {
  afterEach(cleanup);

  test('should not have accessibility violations', async () => {
    const { container } = render(
      <MnetUIBase>
        <CheckBox a11yTitle="test" />
      </MnetUIBase>,
    );
    const results = await axe(container);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  test('label should not have accessibility violations', async () => {
    const { container } = render(
      <MnetUIBase>
        <CheckBox label="test" />
      </MnetUIBase>,
    );
    const results = await axe(container);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  test('renders', () => {
    const component = renderer.create(
      <MnetUIBase>
        <CheckBox />
        <CheckBox id="test id" name="test name" />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('label renders', () => {
    const component = renderer.create(
      <MnetUIBase>
        <CheckBox label="test label" />
        <CheckBox label={<div>test label</div>} />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('checked renders', () => {
    const component = renderer.create(
      <MnetUIBase>
        <CheckBox checked />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('defaultChecked', () => {
    const component = renderer.create(
      <MnetUIBase>
        <CheckBox defaultChecked />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('disabled renders', () => {
    const component = renderer.create(
      <MnetUIBase>
        <CheckBox disabled />
        <CheckBox disabled checked />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('reverse renders', () => {
    const component = renderer.create(
      <MnetUIBase>
        <CheckBox reverse label="test label" />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('toggle renders', () => {
    const component = renderer.create(
      <MnetUIBase>
        <CheckBox toggle />
        <CheckBox toggle checked />
        <CheckBox toggle label="test label" />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('reverse toggle fill', () => {
    const component = renderer.create(
      <Grommet>
        <CheckBox label="test label" reverse fill toggle />
        <CheckBox fill toggle label="test label" />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('indeterminate renders', () => {
    const component = renderer.create(
      <MnetUIBase>
        <CheckBox indeterminate />
        <CheckBox indeterminate label="test label" />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('indeterminate checked warns', () => {console.warn = jest.fn();
    const warnSpy = jest.spyOn(console, 'warn');
    render(
      <MnetUIBase>
        <CheckBox indeterminate checked />
      </MnetUIBase>,
    );
    expect(warnSpy).toBeCalledWith(
      'Checkbox cannot be "checked" and "indeterminate" at the same time.',
    );
  warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });

  test('indeterminate toggle warns', () => {
    console.warn = jest.fn();
    const warnSpy = jest.spyOn(console, 'warn');
    render(
      <MnetUIBase>
        <CheckBox indeterminate toggle />
      </MnetUIBase>,
    );
    expect(warnSpy).toBeCalledWith(
      'Checkbox of type toggle does not have "indeterminate" state.',
    );
  warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });

  test('controlled', () => {
    const { container, getByText } = render(
      <MnetUIBase>
        <CheckBox label="test-label" checked />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByText('test-label'));
    expect(container.firstChild).toMatchSnapshot();
  });
  test('controlled', () => {
    const { container, getByText } = render(
      <MnetUIBase>
        <CheckBox label="test-label" checked />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByText('test-label'));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('custom theme', () => {
    const customTheme = {
      checkBox: {
        pad: {
          horizontal: 'small',
          vertical: 'xsmall',
        },
      },
    };

    const { container } = render(
      <Grommet theme={customTheme}>
        <CheckBox label="test-label" />
      </Grommet>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
