import React from 'react';
import 'jest-styled-components';
import { cleanup, render, fireEvent } from '@testing-library/react';

import { MnetUIBase } from '../../MnetUIBase';
import { Box } from '../../Box';
import { Text } from '../../Text';
import { DataTable } from '..';

const DATA = [];
for (let i = 0; i < 95; i += 1) {
  DATA.push({ a: `entry-${i}`, b: i });
}

describe('DataTable', () => {
  afterEach(cleanup);

  test('empty', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('basic', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('!primaryKey', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          primaryKey={false}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('paths', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b.c', header: 'B' },
          ]}
          data={[
            { a: 'one', b: { c: 1 } },
            { a: 'two', b: { c: 2 } },
          ]}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('primaryKey', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          primaryKey="b"
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('footer', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A', footer: 'Total' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('sortable', () => {
    const { container, getByText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'zero', b: 0 },
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          sortable
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    const headerCell = getByText('A');
    fireEvent.click(headerCell, {});
    expect(container.firstChild).toMatchSnapshot();
  });

  test('onSort', () => {
    const onSort = jest.fn();
    const { container, getByText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'zero', b: 0 },
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          onSort={onSort}
          sortable
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    const headerCell = getByText('A');
    fireEvent.click(headerCell, {});
    expect(onSort).toBeCalledWith(
      expect.objectContaining({ property: 'a', direction: 'asc' }),
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('onSort external', () => {
    const onSort = jest.fn();
    const { container, getByText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'zero', b: 0 },
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          onSort={onSort}
          sort={{ property: 'a', direction: 'asc', external: true }}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    const headerCell = getByText('A');
    fireEvent.click(headerCell, {});
    expect(onSort).toBeCalledWith(
      expect.objectContaining({
        property: 'a',
        direction: 'desc',
        external: true,
      }),
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('sort', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'zero', b: 0 },
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          sort={{ property: 'a', direction: 'asc' }}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('sort nested object', () => {
    const { container, getByText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            {
              property: 'b.value',
              header: 'Value',
              render: datum => datum.b && datum.b.value,
            },
          ]}
          data={[
            { a: 'zero', b: { value: 1 } },
            { a: 'one', b: { value: 2 } },
            { a: 'two', b: { value: 3 } },
          ]}
          sort={{ property: 'b.value', direction: 'asc' }}
        />
      </MnetUIBase>,
    );

    expect(container.querySelectorAll('td').item(0).textContent).toBe('1');
    expect(container.querySelectorAll('td').item(1).textContent).toBe('2');
    expect(container.querySelectorAll('td').item(2).textContent).toBe('3');

    fireEvent.click(getByText('Value'));

    expect(container.querySelectorAll('td').item(0).textContent).toBe('3');
    expect(container.querySelectorAll('td').item(1).textContent).toBe('2');
    expect(container.querySelectorAll('td').item(2).textContent).toBe('1');

    expect(container.firstChild).toMatchSnapshot();
  });

  test('sort nested object with onSort', () => {
    const onSort = jest.fn();
    const { container, getByText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            {
              property: 'b.value',
              header: 'Value',
              render: datum => datum.b && datum.b.value,
            },
          ]}
          data={[
            { a: 'zero', b: { value: 1 } },
            { a: 'one', b: { value: 2 } },
            { a: 'two', b: { value: 3 } },
          ]}
          onSort={onSort}
          sort={{ property: 'b.value', direction: 'asc' }}
        />
      </MnetUIBase>,
    );

    expect(container.querySelectorAll('td').item(0).textContent).toBe('1');
    expect(container.querySelectorAll('td').item(1).textContent).toBe('2');
    expect(container.querySelectorAll('td').item(2).textContent).toBe('3');

    fireEvent.click(getByText('Value'));

    expect(onSort).toBeCalledWith(
      expect.objectContaining({ property: 'b.value' }),
    );

    expect(container.querySelectorAll('td').item(0).textContent).toBe('3');
    expect(container.querySelectorAll('td').item(1).textContent).toBe('2');
    expect(container.querySelectorAll('td').item(2).textContent).toBe('1');

    expect(container.firstChild).toMatchSnapshot();
  });

  test('sort external', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'zero', b: 0 },
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          sort={{ property: 'a', direction: 'asc', external: true }}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('search', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[{ property: 'a', header: 'A', search: true }]}
          data={[{ a: 'Alpha' }, { a: 'beta' }, { a: '[]' }]}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(container.querySelector('[aria-label="Open search by a"]'));
    const searchInput = container.querySelector('[name="search-a"]');
    expect(document.activeElement).toBe(searchInput);
    fireEvent.change(searchInput, {
      target: { value: '[' },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  test('resizeable', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          resizeable
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('aggregate', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            {
              property: 'b',
              header: 'B',
              aggregate: 'sum',
              footer: { aggregate: true },
            },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('aggregate with nested object', () => {
    const { container, getByText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            {
              property: 'obj.value',
              header: 'object',
              aggregate: 'sum',
              footer: { aggregate: true },
            },
            {
              property: 'obj2.value',
              header: 'object 2',
              render: datum => datum.obj2.value,
            },
          ]}
          data={[
            { a: 'one', obj: { value: 1 }, obj2: { value: 10 } },
            { a: 'two', obj: { value: 2 }, obj2: { value: 20 } },
          ]}
        />
      </MnetUIBase>,
    );
    expect(getByText('3')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('rowDetails', () => {
    const { container, getAllByLabelText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          rowDetails={row => <Box>{row.a}</Box>}
          primaryKey="b"
        />
      </MnetUIBase>,
    );
    const expandButtons = getAllByLabelText('expand');
    fireEvent.click(expandButtons[1], {});
    expect(container.firstChild).toMatchSnapshot();
  });

  test('rowDetails condtional', () => {
    const { container, getAllByLabelText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          rowDetails={row => {
            if (row.b === '1.1') {
              return <Box> {row.a} </Box>;
            }
            return (
              <Box>
                {row.a} : {row.b}{' '}
              </Box>
            );
          }}
          primaryKey="b"
        />
      </MnetUIBase>,
    );
    const expandButtons = getAllByLabelText('expand');
    fireEvent.click(expandButtons[1], {});
    expect(container.firstChild).toMatchSnapshot();
  });
  test('groupBy', () => {
    const { container, getByText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          groupBy="a"
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    const headerCell = getByText('A');
    fireEvent.click(headerCell, {});
    expect(container.firstChild).toMatchSnapshot();
  });

  test('groupBy toggle', () => {
    function TestComponent() {
      const [groupBy, setGroupBy] = React.useState();
      const toggle = () => setGroupBy(groupBy === undefined ? 'a' : undefined);

      return (
        <MnetUIBase>
          <button type="button" onClick={toggle}>
            toggle
          </button>
          <DataTable
            columns={[
              { property: 'a', header: 'A' },
              { property: 'b', header: 'B' },
            ]}
            data={[
              { a: 'one', b: 1.1 },
              { a: 'one', b: 1.2 },
              { a: 'two', b: 2.1 },
              { a: 'two', b: 2.2 },
            ]}
            groupBy={groupBy}
          />
        </MnetUIBase>
      );
    }
    const { container, getByText } = render(<TestComponent />);
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(getByText('toggle'));
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(getByText('toggle'));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('click', () => {
    const onClickRow = jest.fn();
    const { container, getByText } = render(
      <MnetUIBase>
        <DataTable
          columns={[{ property: 'a', header: 'A' }]}
          data={[{ a: 'alpha' }, { a: 'beta' }]}
          onClickRow={onClickRow}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByText('beta'));
    expect(onClickRow).toBeCalledWith(
      expect.objectContaining({ datum: { a: 'beta' } }),
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('background', () => {
    const { container } = render(
      <MnetUIBase>
        {[
          'accent-1',
          ['accent-1', 'accent-2'],
          { header: 'accent-1', body: 'accent-2', footer: 'accent-3' },
        ].map(background => (
          <DataTable
            key={JSON.stringify(background)}
            columns={[
              { property: 'a', header: 'A', footer: 'Total' },
              { property: 'b', header: 'B' },
            ]}
            data={[
              { a: 'one', b: 1 },
              { a: 'two', b: 2 },
            ]}
            background={background}
          />
        ))}
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('border', () => {
    const { container } = render(
      <MnetUIBase>
        {[
          true,
          'top',
          { color: 'accent-1', side: 'top', size: 'small' },
          {
            header: 'top',
            body: { color: 'accent-1', side: 'top', size: 'small' },
          },
        ].map(border => (
          <DataTable
            key={JSON.stringify(border)}
            columns={[
              { property: 'a', header: 'A', footer: 'Total' },
              { property: 'b', header: 'B' },
            ]}
            data={[
              { a: 'one', b: 1 },
              { a: 'two', b: 2 },
            ]}
            border={border}
          />
        ))}
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('pad', () => {
    const { container } = render(
      <MnetUIBase>
        {[
          'small',
          { vertical: 'small', horizontal: 'medium' },
          {
            header: 'small',
            body: { vertical: 'small', horizontal: 'medium' },
          },
        ].map(pad => (
          <DataTable
            key={JSON.stringify(pad)}
            columns={[
              { property: 'a', header: 'A', footer: 'Total' },
              { property: 'b', header: 'B' },
            ]}
            data={[
              { a: 'one', b: 1 },
              { a: 'two', b: 2 },
            ]}
            pad={pad}
          />
        ))}
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('rowProps', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A', footer: 'Total' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          rowProps={{
            one: { background: 'accent-1', border: 'bottom', pad: 'large' },
          }}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('groupBy property', () => {
    const { container, getByText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          groupBy={{ property: 'a' }}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    const headerCell = getByText('A');
    fireEvent.click(headerCell, {});
    expect(container.firstChild).toMatchSnapshot();
  });

  test('groupBy expand', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          primaryKey="b"
          groupBy={{ property: 'a', expand: ['one'] }}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('groupBy onExpand', () => {
    const onExpand = jest.fn(groupState => groupState);
    const { getAllByLabelText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          primaryKey="b"
          groupBy={{ property: 'a', onExpand }}
        />
      </MnetUIBase>,
    );

    const expandButtons = getAllByLabelText('expand');
    fireEvent.click(expandButtons[1], {});

    expect(onExpand).toBeCalled();
    expect(onExpand.mock.results[0].value).toEqual(['one']);
    expect(onExpand.mock.results[0].value).toMatchSnapshot();
  });

  test('replace', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          primaryKey="b"
          step={2}
          replace
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('themeColumnSizes', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A', size: 'medium' },
            { property: 'b', header: 'B', size: 'small' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('absoluteColumnSizes', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A', size: '400px' },
            { property: 'b', header: 'B', size: '200px' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('relativeColumnSizes', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A', size: '2/3' },
            { property: 'b', header: 'B', size: '1/3' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('fill', () => {
    const { container } = render(
      <MnetUIBase>
        {[true, 'horizontal', 'vertical'].map(fill => (
          <DataTable
            key={JSON.stringify(fill)}
            columns={[
              { property: 'a', header: 'A', footer: 'Total' },
              { property: 'b', header: 'B' },
            ]}
            data={[
              { a: 'one', b: 1 },
              { a: 'two', b: 2 },
            ]}
            fill={fill}
          />
        ))}
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('pin', () => {
    const { container } = render(
      <MnetUIBase>
        {[true, 'header', 'footer'].map(pin => (
          <DataTable
            key={JSON.stringify(pin)}
            columns={[
              { property: 'a', header: 'A', footer: 'Total', pin: true },
              { property: 'b', header: 'B' },
            ]}
            data={[
              { a: 'one', b: 1 },
              { a: 'two', b: 2 },
            ]}
            pin={pin}
          />
        ))}
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('pin + background', () => {
    const theme = {
      dataTable: {
        pinned: {
          header: {
            background: {
              color: 'blue',
            },
          },
          footer: {
            background: {
              color: 'green',
            },
          },
        },
      },
    };

    const { container } = render(
      <MnetUIBase theme={theme}>
        {[true, 'header', 'footer'].map(pin => (
          <DataTable
            background={{ pinned: 'red' }}
            key={JSON.stringify(pin)}
            columns={[
              { property: 'a', header: 'A', footer: 'Total', pin: true },
              { property: 'b', header: 'B' },
            ]}
            data={[
              { a: 'one', b: 1 },
              { a: 'two', b: 2 },
            ]}
            pin={pin}
          />
        ))}
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('pin + background context', () => {
    const { container } = render(
      <MnetUIBase>
        {[
          'background-back',
          'background-front',
          { color: 'background-back', dark: true },
        ].map(contextBackground => (
          <Box key={contextBackground} background={contextBackground}>
            <DataTable
              columns={[
                { property: 'a', header: 'A', footer: 'Total', pin: true },
                { property: 'b', header: 'B' },
              ]}
              data={[
                { a: 'one', b: 1 },
                { a: 'two', b: 2 },
              ]}
              pin
            />
          </Box>
        ))}
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('select', () => {
    const onSelect = jest.fn();
    const { container, getByLabelText } = render(
      <MnetUIBase>
        <DataTable
          columns={[{ property: 'a', header: 'A' }]}
          data={[{ a: 'alpha' }, { a: 'beta' }]}
          primaryKey="a"
          select={['alpha']}
          onSelect={onSelect}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByLabelText('select beta'));
    expect(onSelect).toBeCalledWith(expect.arrayContaining(['alpha', 'beta']));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('custom theme', () => {
    const customTheme = {
      dataTable: {
        header: {
          background: 'skyblue',
          border: {
            color: 'brand',
            size: 'medium',
          },
          gap: 'none',
          pad: { horizontal: 'small', vertical: 'xsmall' },
          font: {
            weight: 'bold',
          },
          hover: {
            background: {
              color: 'light-2',
            },
          },
        },
        resize: {
          hover: {
            border: {
              color: 'red',
              side: 'end',
              size: 'xsmall',
            },
          },
        },
      },
    };

    const { container, getByLabelText } = render(
      <MnetUIBase theme={customTheme}>
        <DataTable
          columns={[{ property: 'a', header: 'A' }]}
          data={[{ a: 'alpha' }, { a: 'beta' }]}
          primaryKey="a"
          select={['alpha']}
          sortable
          resizeable
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.mouseOver(getByLabelText('select beta'));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('units', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A', footer: 'Total' },
            { property: 'b', header: 'B', units: '(TiB)' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('placeholder', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A', footer: 'Total' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          placeholder="test placeholder"
        />
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          placeholder={<Text weight="bold">test placeholder</Text>}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should paginate', () => {
    const { container, getAllByText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={DATA}
          paginate
        />
      </MnetUIBase>,
    );

    const results = getAllByText('entry', { exact: false });
    // default DataTable step 50
    expect(results.length).toEqual(50);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should apply pagination styling', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={DATA}
          paginate={{ background: 'red', margin: 'large' }}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should show correct item index when "show" is a number', () => {
    const show = 15;
    const { container, getByText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={DATA}
          paginate
          show={show}
        />
      </MnetUIBase>,
    );

    const result = getByText(`entry-${show}`);
    expect(result).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should show correct page when "show" is { page: # }', () => {
    const desiredPage = 2;
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={DATA}
          paginate
          show={{ page: desiredPage }}
        />
      </MnetUIBase>,
    );

    const activePage = container.querySelector(`[aria-current="page"]`)
      .innerHTML;

    expect(activePage).toEqual(`${desiredPage}`);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render correct num items per page (step)', () => {
    const step = 14;
    const { container, getAllByText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={DATA}
          paginate
          step={step}
        />
      </MnetUIBase>,
    );

    const results = getAllByText('entry', { exact: false });

    expect(results.length).toEqual(step);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render new data when page changes', () => {
    const { container, getByLabelText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={DATA}
          paginate
        />
      </MnetUIBase>,
    );

    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByLabelText('Go to next page'));

    expect(container.firstChild).toMatchSnapshot();
  });

  test('themeColumnSizes', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A', size: 'medium' },
            { property: 'b', header: 'B', size: 'small' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('absoluteColumnSizes', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A', size: '400px' },
            { property: 'b', header: 'B', size: '200px' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('relativeColumnSizes', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A', size: '2/3' },
            { property: 'b', header: 'B', size: '1/3' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should not show paginate controls when data is empty array', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[]}
          paginate
        />
      </MnetUIBase>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should not show paginate controls when length of data < step', () => {
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: `entry-1`, b: 1 },
            { a: `entry-2`, b: 2 },
            { a: `entry-3`, b: 3 },
          ]}
          paginate
        />
      </MnetUIBase>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('onSelect + groupBy should select/deselect all when grouped', () => {
    const onSelect = jest.fn();
    const { container, getByLabelText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B', primary: true },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          groupBy="a"
          onSelect={onSelect}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    let headerCheckBox;
    headerCheckBox = getByLabelText('select all');
    fireEvent.click(headerCheckBox);
    expect(container.firstChild).toMatchSnapshot();

    // aria-label should have changed since all entries
    // are selected
    headerCheckBox = getByLabelText('unselect all');
    fireEvent.click(headerCheckBox);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('onSelect + groupBy should select all items within a group', () => {
    const onSelect = jest.fn();
    const { container, getByLabelText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B', primary: true },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          groupBy="a"
          onSelect={onSelect}
        />
      </MnetUIBase>,
    );

    const groupCheckBox = getByLabelText('select one');
    fireEvent.click(groupCheckBox);
    expect(onSelect).toBeCalledWith(expect.arrayContaining([1.1, 1.2]));
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`onSelect + groupBy should render indeterminate checkbox on table and 
  group if subset of group items are selected`, () => {
    const onSelect = jest.fn();
    const { container, getAllByLabelText, getByLabelText } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          groupBy="a"
          primaryKey="b"
          onSelect={onSelect}
        />
      </MnetUIBase>,
    );

    const groupCheckBox = getByLabelText('select one');
    fireEvent.click(groupCheckBox);
    const expandButtons = getAllByLabelText('expand');
    fireEvent.click(expandButtons[1], {});

    fireEvent.click(getByLabelText('unselect 1.1'));
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`onSelect + groupBy should render indeterminate checkbox on table and 
  group when controlled`, () => {
    const onSelect = jest.fn();
    const { container } = render(
      <MnetUIBase>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B', primary: true },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          groupBy="a"
          select={[1.1]}
          onSelect={onSelect}
        />
      </MnetUIBase>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
  
});
