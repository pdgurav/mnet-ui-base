import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { cleanup, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { MnetUIBase } from '../../MnetUIBase';
import { Box } from '../../Box';
import { Chart, calcs } from '..';

const VALUES = [
  { value: [1, 60], label: 'sixty' },
  { value: [0, 0], label: 'zero' },
];

const UNDEFINED_VALUES = [
  { value: [2, 60], label: 'sixty' },
  { value: [1, undefined] },
  { value: [0, 0], label: 'zero' },
];

const STYLED_VALUES = [
  {
    value: [1, 60],
    label: 'sixty',
    color: 'status-ok',
    opacity: 'strong',
    thickness: 'small',
  },
  {
    value: [0, 0],
    label: 'zero',
    color: '#123456',
    opacity: 0.27,
    thickness: 27,
  },
];

describe('Chart', () => {
  afterEach(cleanup);

  test('should not have accessibility violations', async () => {
    const { container } = render(
      <MnetUIBase>
        <Chart values={VALUES} />
      </MnetUIBase>,
    );
    const results = await axe(container);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  test('default', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Chart values={VALUES} />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('opacity', () => {
    const { container } = render(
      <MnetUIBase>
        <Chart opacity values={VALUES} />
        <Chart opacity={false} values={VALUES} />
        <Chart opacity="strong" values={VALUES} />
        <Chart
          type="bar"
          values={[
            { value: [7, 100], label: 'one hundred', opacity: true },
            { value: [6, 70], label: 'seventy', opacity: 'medium' },
            { value: [5, 60], label: 'sixty', opacity: 'weak' },
            { value: [4, 80], label: 'eighty', opacity: 'strong' },
            { value: [3, 40], label: 'forty', opacity: false },
            { value: [2, 0], label: 'zero', opacity: 0.3 },
          ]}
        />
        <Chart
          type="point"
          point="circle"
          values={[
            { value: [7, 100], label: 'one hundred', opacity: true },
            { value: [6, 70], label: 'seventy', opacity: 'medium' },
            { value: [5, 60], label: 'sixty', opacity: 'weak' },
            { value: [4, 80], label: 'eighty', opacity: 'strong' },
            { value: [3, 40], label: 'forty', opacity: false },
            { value: [2, 0], label: 'zero', opacity: 0.3 },
          ]}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('type', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Chart type="bar" values={VALUES} />
        <Chart type="line" values={VALUES} />
        <Chart type="area" values={VALUES} />
        <Chart type="point" values={VALUES} />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('size', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Chart size="xsmall" values={VALUES} />
        <Chart size="small" values={VALUES} />
        <Chart size="medium" values={VALUES} />
        <Chart size="large" values={VALUES} />
        <Chart size="xlarge" values={VALUES} />
        <Box width="large">
          <Chart size={{ width: 'full' }} values={VALUES} />
          <Chart size={{ width: 'fill' }} values={VALUES} />
          <Chart size={{ width: 'auto' }} values={VALUES} />
        </Box>
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('thickness', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Chart thickness="xsmall" values={VALUES} />
        <Chart thickness="small" values={VALUES} />
        <Chart thickness="medium" values={VALUES} />
        <Chart thickness="large" values={VALUES} />
        <Chart thickness="xlarge" values={VALUES} />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('cap', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Chart round values={VALUES} />
        <Chart type="line" round values={VALUES} />
        <Chart type="area" round values={VALUES} />
        <Chart type="point" round values={VALUES} />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('gap', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Box width="large">
          <Chart size={{ width: 'auto' }} gap="small" values={VALUES} />
          <Chart size={{ width: 'auto' }} gap="medium" values={VALUES} />
          <Chart size={{ width: 'auto' }} gap="large" values={VALUES} />
        </Box>
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('dash', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Chart dash values={VALUES} />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('color', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Chart color="brand" values={VALUES} />
        <Chart color={{ color: 'brand', opacity: 'strong' }} values={VALUES} />
        <Chart
          color={[
            { value: 0, color: 'brand' },
            { value: 60, color: 'border' },
          ]}
          values={VALUES}
        />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('point', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Chart type="point" point="circle" values={VALUES} />
        <Chart type="point" point="diamond" values={VALUES} />
        <Chart type="point" point="square" values={VALUES} />
        <Chart type="point" point="star" values={VALUES} />
        <Chart type="point" point="triangle" values={VALUES} />
        <Chart type="point" point="triangleDown" values={VALUES} />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('pattern', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Chart type="area" pattern="squares" values={VALUES} />
        <Chart type="area" pattern="circles" values={VALUES} />
        <Chart type="area" pattern="stripesHorizontal" values={VALUES} />
        <Chart type="area" pattern="stripesVertical" values={VALUES} />
        <Chart type="area" pattern="stripesDiagonalDown" values={VALUES} />
        <Chart type="area" pattern="stripesDiagonalUp" values={VALUES} />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('value style', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Chart type="point" point="circle" values={STYLED_VALUES} />
        <Chart type="bar" values={STYLED_VALUES} />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('pad', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Chart pad="xsmall" values={VALUES} />
        <Chart
          pad={{ horizontal: 'medium', vertical: 'small' }}
          values={VALUES}
        />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('animate', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Chart type="bar" values={VALUES} animate />
        <Chart type="line" values={VALUES} animate />
        <Chart type="area" values={VALUES} animate />
        <Chart type="point" values={VALUES} animate />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('undefined values', () => {
    const component = renderer.create(
      <MnetUIBase>
        <Chart type="bar" values={UNDEFINED_VALUES} />
        <Chart type="line" values={UNDEFINED_VALUES} />
        <Chart type="area" values={UNDEFINED_VALUES} />
        <Chart type="point" values={UNDEFINED_VALUES} />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('calcs basic', () => {
    const result = calcs([
      [1, 2, 2],
      [2, 2, 2],
    ]);
    expect(result).toMatchSnapshot();
  });

  test('calcs with single value', () => {
    const result = calcs([1]);
    expect(result).toMatchSnapshot();
  });

  test('calcs with negative min', () => {
    const result = calcs([
      [1, -2, -2],
      [2, 2, 2],
    ]);
    expect(result).toMatchSnapshot();
  });

  test('calcs large thickness', () => {
    const vals = Array(8).fill([1, 2, 3]);
    const result = calcs(vals);
    expect(result).toMatchSnapshot();
  });

  test('calcs medium thickness', () => {
    const vals = Array(14).fill([1, 2, 3]);
    const result = calcs(vals);
    expect(result).toMatchSnapshot();
  });

  test('calcs small thickness', () => {
    const vals = Array(24).fill([1, 2, 3]);
    const result = calcs(vals);
    expect(result).toMatchSnapshot();
  });

  test('calcs xsmall thickness', () => {
    const vals = Array(64).fill([1, 2, 3]);
    const result = calcs(vals);
    expect(result).toMatchSnapshot();
  });

  test('calcs hair thickness', () => {
    const vals = Array(124).fill([1, 2, 3]);
    const result = calcs(vals);
    expect(result).toMatchSnapshot();
  });
});
