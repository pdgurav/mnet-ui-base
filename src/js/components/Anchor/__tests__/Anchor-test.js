import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';
import { MnetUIBase } from '../../MnetUIBase';
import { Anchor } from '..';

describe('Anchor', () => {
  afterEach(cleanup);

  test('renders', () => {
    const { container } = render(
      <MnetUIBase>
        <Anchor />
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders with children', () => {
    const { container } = render(
      <MnetUIBase>
        <Anchor href="#">children</Anchor>
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('warns about invalid label render', () => {
    const warnSpy = jest.spyOn(console, 'warn');
    const component = render.create(
      <MnetUIBase>
        <Anchor href="#" label="Test">
          invalid
        </Anchor>
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith(
      'Anchor should not have children if icon or label is provided',
    );

    warnSpy.mockReset();
    warnSpy.mockRestore();
  });

  test('warns about invalid icon render', () => {
    const warnSpy = jest.spyOn(console, 'warn');
    const component = render.create(
      <MnetUIBase>
        <Anchor href="#" icon={<svg />}>
          invalid
        </Anchor>
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith(
      'Anchor should not have children if icon or label is provided',
    );

    warnSpy.mockReset();
    warnSpy.mockRestore();
  });

  test('primary renders', () => {
    const { container } = render(
      <MnetUIBase>
        <Anchor href="#" primary label="Test" />
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });

  test('focus renders', () => {
    const { container, getByText } = render(
      <MnetUIBase>
        <Anchor href="#" label="Test" />
      </MnetUIBase>,
    );
    fireEvent.focus(getByText('Test'));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('disabled renders', () => {
    const { container } = render(
      <MnetUIBase>
        <Anchor disabled />
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });

  test('icon label renders', () => {
    const { container } = render(
      <MnetUIBase>
        <Anchor icon={<svg />} label="Test" onClick={() => {}} />
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });

  test('reverse icon label renders', () => {
    const { container } = render(
      <MnetUIBase>
        <Anchor reverse icon={<svg />} label="Test" onClick={() => {}} />
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });

  test('size renders', () => {
    const { container } = render(
      <MnetUIBase>
        <Anchor size="xsmall" />
        <Anchor size="small" />
        <Anchor size="medium" />
        <Anchor size="large" />
        <Anchor size="xlarge" />
        <Anchor size="xxlarge" />
        <Anchor size="10px" />
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });

  test('is clickable', () => {
    const onClick = jest.fn();
    const { container, getByText } = render(
      <MnetUIBase>
        <Anchor href="#" label="Test" onClick={onClick} />
      </MnetUIBase>,
    );
    const anchor = getByText('Test');
    fireEvent.click(anchor);
    expect(container.firstChild).toMatchSnapshot();
    expect(onClick).toBeCalled();
  });

  test('renders tag', () => {
    const { container } = render(
      <MnetUIBase>
        <Anchor href="#" label="Test" as="span" />
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });

  test('weight renders', () => {
    const { container } = render(
      <MnetUIBase>
        <Anchor href="#" label="Normal" weight="normal" />
        <Anchor href="#" label="Bold" weight="bold" />
        <Anchor href="#" label="Bold" weight={500} />
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });
});
