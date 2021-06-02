import React, { useState } from 'react';
import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { cleanup, render, fireEvent } from '@testing-library/react';

import { axe } from 'jest-axe';
import { MnetUIBase } from '../../MnetUIBase';
import { List } from '..';

const data = [];
for (let i = 0; i < 95; i += 1) {
  data.push(`entry-${i}`);
}

describe('List', () => {
  afterEach(cleanup);

  test('should have no accessibility violations', async () => {
    const onClickItem = jest.fn();
    const { container, getByText } = render(
      <MnetUIBase>
        <List
          aria-label="List"
          data={[{ a: 'alpha' }, { a: 'beta' }]}
          onClickItem={onClickItem}
        />
      </MnetUIBase>,
    );

    fireEvent.click(getByText('alpha'));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('empty', () => {
    const { container } = render(
      <MnetUIBase>
        <List />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('data strings', () => {
    const { container } = render(
      <MnetUIBase>
        <List data={['one', 'two']} />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('data objects', () => {
    const { container } = render(
      <MnetUIBase>
        <List
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('onClickItem', () => {
    const onClickItem = jest.fn();
    const { container, getByText } = render(
      <MnetUIBase>
        <List
          data={[{ a: 'alpha' }, { a: 'beta' }]}
          onClickItem={onClickItem}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByText('beta'));
    expect(onClickItem).toBeCalledWith(
      expect.objectContaining({ item: { a: 'beta' } }),
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('background string', () => {
    const { container } = render(
      <MnetUIBase>
        <List data={['one', 'two']} background="accent-1" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('background array', () => {
    const { container } = render(
      <MnetUIBase>
        <List
          data={['one', 'two', 'three', 'four']}
          background={['accent-1', 'accent-2']}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('border boolean true', () => {
    const { container } = render(
      <MnetUIBase>
        <List data={['one', 'two']} border />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('border boolean false', () => {
    const { container } = render(
      <MnetUIBase>
        <List data={['one', 'two']} border={false} />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('border side', () => {
    const { container } = render(
      <MnetUIBase>
        <List data={['one', 'two']} border="horizontal" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('border object', () => {
    const { container } = render(
      <MnetUIBase>
        <List
          data={['one', 'two']}
          border={{ color: 'accent-1', side: 'horizontal', size: 'large' }}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('children render', () => {
    const { container } = render(
      <MnetUIBase>
        <List data={['one', 'two']}>
          {(item, index) => `${item} - ${index}`}
        </List>
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('itemProps', () => {
    const { container } = render(
      <MnetUIBase>
        <List
          data={['one', 'two']}
          itemProps={{
            1: {
              background: 'accent-1',
              border: { side: 'horizontal', size: 'small' },
              pad: 'large',
            },
          }}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('margin string', () => {
    const { container } = render(
      <MnetUIBase>
        <List data={['one', 'two']} margin="large" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('margin object', () => {
    const { container } = render(
      <MnetUIBase>
        <List data={['one', 'two']} margin={{ horizontal: 'large' }} />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('pad string', () => {
    const { container } = render(
      <MnetUIBase>
        <List data={['one', 'two']} pad="large" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('pad object', () => {
    const { container } = render(
      <MnetUIBase>
        <List data={['one', 'two']} pad={{ horizontal: 'large' }} />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('primaryKey', () => {
    const { container } = render(
      <MnetUIBase>
        <List
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          primaryKey="a"
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('secondaryKey', () => {
    const { container } = render(
      <MnetUIBase>
        <List
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          primaryKey="a"
          secondaryKey="b"
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('List events', () => {
  let onClickItem;
  let App;

  beforeEach(() => {
    onClickItem = jest.fn();
    App = () => (
      <MnetUIBase>
        <List
          data={[{ a: 'alpha' }, { a: 'beta' }]}
          onClickItem={onClickItem}
        />
      </MnetUIBase>
    );
  });

  afterEach(cleanup);

  test('Enter key', () => {
    const { container, getByText } = render(<App />);

    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByText('beta'));
    fireEvent.mouseOver(getByText('beta'));
    fireEvent.keyDown(getByText('beta'), {
      key: 'Enter',
      keyCode: 13,
      which: 13,
    });
    // Reported bug: onEnter calls onClickItem twice instead of once.
    // Issue #4173. Once fixed it should be
    // `expect(onClickItem).toHaveBeenCalledTimes(2);`
    expect(onClickItem).toHaveBeenCalledTimes(3);
    // Both focus and active should be placed on 'beta'
    expect(container.firstChild).toMatchSnapshot();
  });

  test('ArrowUp key', () => {
    const { container, getByText } = render(<App />);

    fireEvent.click(getByText('beta'));
    fireEvent.mouseOver(getByText('beta'));
    fireEvent.keyDown(getByText('beta'), {
      key: 'ArrowUp',
      keyCode: 38,
      which: 38,
    });
    expect(onClickItem).toHaveBeenCalledTimes(1);
    // Focus on beta while `active` is on alpha
    expect(container.firstChild).toMatchSnapshot();
  });

  test('ArrowDown key', () => {
    const { container, getByText } = render(<App />);

    fireEvent.click(getByText('alpha'));
    fireEvent.mouseOver(getByText('alpha'));
    fireEvent.keyDown(getByText('alpha'), {
      key: 'ArrowDown',
      keyCode: 40,
      which: 40,
    });
    expect(onClickItem).toHaveBeenCalledTimes(1);
    // Focus on alpha while `active` is on beta
    expect(container.firstChild).toMatchSnapshot();
  });

  test('ArrowDown key on last element', () => {
    const { container, getByText } = render(<App />);

    fireEvent.click(getByText('beta'));
    fireEvent.mouseOver(getByText('beta'));
    fireEvent.keyDown(getByText('beta'), {
      key: 'ArrowDown',
      keyCode: 40,
      which: 40,
    });
    expect(onClickItem).toHaveBeenCalledTimes(1);
    // Both focus and active should be placed on 'beta'
    expect(container.firstChild).toMatchSnapshot();
  });

  test('focus and blur', () => {
    const { container, getByText } = render(<App />);

    fireEvent.focus(getByText('beta'));
    // Both focus and active should be placed on 'beta'
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.blur(getByText('beta'));
    // Focus on beta while `active` is not on beta
    expect(container.firstChild).toMatchSnapshot();
    expect(onClickItem).toBeCalledTimes(0);
  });

  test('mouse events', () => {
    const { container, getByText } = render(<App />);

    fireEvent.mouseOver(getByText('beta'));
    // Both focus and active should be placed on 'beta'
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.mouseOut(getByText('beta'));
    // Focus on beta while `active` is not on beta
    expect(container.firstChild).toMatchSnapshot();
    expect(onClickItem).toBeCalledTimes(0);
  });

  test('should paginate', () => {
    const { container, getAllByText } = render(
      <MnetUIBase>
        <List data={data} paginate />
      </MnetUIBase>,
    );

    const results = getAllByText('entry', { exact: false });
    // default step 50
    expect(results.length).toEqual(50);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should apply pagination styling', () => {
    const { container } = render(
      <MnetUIBase>
        <List data={data} paginate={{ background: 'red', margin: 'large' }} />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should show correct item index when "show" is a number', () => {
    const show = 15;
    const { container, getByText } = render(
      <MnetUIBase>
        <List data={data} show={show} paginate />
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
        <List data={data} show={{ page: desiredPage }} paginate />
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
        <List data={data} step={step} paginate />
      </MnetUIBase>,
    );

    const results = getAllByText('entry', { exact: false });

    expect(results.length).toEqual(step);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render new data when page changes', () => {
    const { container, getByLabelText } = render(
      <MnetUIBase>
        <List data={data} paginate />
      </MnetUIBase>,
    );

    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByLabelText('Go to next page'));

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should not show paginate controls when length of data < step', () => {
    const { container } = render(
      <Grommet>
        <List data={['entry-1', 'entry-2', 'entry-3']} paginate />
      </Grommet>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('List onOrder', () => {
  let onOrder;
  let App;

  beforeEach(() => {
    onOrder = jest.fn();
    App = () => {
      const [ordered, setOrdered] = useState([{ a: 'alpha' }, { a: 'beta' }]);
      return (
        <Grommet>
          <List
            data={ordered}
            primaryKey="a"
            onOrder={newData => { setOrdered(newData); onOrder(newData); }}
          />
        </Grommet>
      );
    };
  });

  afterEach(cleanup);

  test('Mouse move down', () => {
    const { container } = render(<App />);

    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(container.querySelector('#alphaMoveDown'));
    expect(onOrder).toHaveBeenCalled();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Keyboard move down', () => {
    const { container, getByText } = render(<App />);

    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByText('alpha'));
    fireEvent.mouseOver(getByText('alpha'));
    fireEvent.keyDown(getByText('alpha'), {
      key: 'ArrowDown',
      keyCode: 40,
      which: 40,
    });
    // alpha's down arrow control should be active
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.keyDown(getByText('alpha'), {
      key: 'Enter',
      keyCode: 13,
      which: 13,
    });
    expect(onOrder).toHaveBeenCalled();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Keyboard move up', () => {
    const { container, getByText } = render(<App />);

    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByText('alpha'));
    fireEvent.mouseOver(getByText('alpha'));
    fireEvent.keyDown(getByText('alpha'), {
      key: 'ArrowDown',
      keyCode: 40,
      which: 40,
    });
    fireEvent.keyDown(getByText('alpha'), {
      key: 'ArrowDown',
      keyCode: 40,
      which: 40,
    });
    // beta's up arrow control should be active
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.keyDown(getByText('alpha'), {
      key: 'Enter',
      keyCode: 13,
      which: 13,
    });
    expect(onOrder).toHaveBeenCalled();
    expect(container.firstChild).toMatchSnapshot();
  });
});