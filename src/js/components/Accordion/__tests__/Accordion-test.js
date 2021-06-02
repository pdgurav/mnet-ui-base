import React from 'react';
import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { axe } from 'jest-axe';
import { cleanup, render, fireEvent, act } from '@testing-library/react';

import { Accordion, AccordionPanel, Box, MnetUIBase } from '../..';

const customTheme = {
  accordion: {
    heading: { level: '3' },
  },
};

describe('Accordion', () => {
  afterEach(cleanup);

  test('should have no accessibility violations', async () => {
    const { container } = render(
      <MnetUIBase>
        <Accordion>
          <AccordionPanel>Panel body 1</AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  test('no AccordionPanel', () => {
    const { container } = render(
      <MnetUIBase>
        <Accordion />
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });

  test('AccordionPanel', () => {
    const { container } = render(
      <MnetUIBase>
        <Accordion>
          <AccordionPanel label="Panel 1">Panel body 1</AccordionPanel>
          <AccordionPanel label="Panel 2">Panel body 2</AccordionPanel>
          {false && (
            <AccordionPanel label="Panel 2">Panel body 2</AccordionPanel>
          )}
        </Accordion>
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });

  test('complex title', () => {
    const { container } = render(
      <MnetUIBase>
        <Box background="dark-1">
          <Accordion>
            <AccordionPanel label={<div>Panel 1 complex</div>}>
              Panel body 1
            </AccordionPanel>
            {undefined}
            <AccordionPanel label={<div>Panel 2 complex</div>}>
              Panel body 2
            </AccordionPanel>
          </Accordion>
        </Box>
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });

  test('complex header', () => {
    const { container } = render(
      <MnetUIBase>
        <Accordion activeIndex={1} animate={false}>
          <AccordionPanel header={<div>Panel 1 header</div>}>
            Panel body 1
          </AccordionPanel>
          {undefined}
          <AccordionPanel header={<div>Panel 2 header</div>}>
            Panel body 2
          </AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });

  test('change to second Panel', () => {
    jest.useFakeTimers();
    const onActive = jest.fn();
    const { getByText, container } = render(
      <MnetUIBase>
        <Accordion onActive={onActive}>
          <AccordionPanel label="Panel 1">Panel body 1</AccordionPanel>
          <AccordionPanel label="Panel 2">Panel body 2</AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(getByText('Panel 2'));

    // wait for panel animation to finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(onActive).toBeCalled();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('change to second Panel without onActive', () => {
    const { getByText, container } = render(
      <MnetUIBase>
        <Accordion animate={false}>
          <AccordionPanel label="Panel 1">Panel body 1</AccordionPanel>
          <AccordionPanel label="Panel 2">Panel body 2</AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(getByText('Panel 2'));

    expect(container.firstChild).toMatchSnapshot();
  });

  test('multiple panels', () => {
    const onActive = jest.fn();
    const { getByText, container } = render(
      <MnetUIBase>
        <Accordion animate={false} multiple onActive={onActive}>
          <AccordionPanel label="Panel 1">Panel body 1</AccordionPanel>
          <AccordionPanel label="Panel 2">Panel body 2</AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(getByText('Panel 2'));
    expect(onActive).toBeCalledWith([1]);

    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(getByText('Panel 1'));
    expect(onActive).toBeCalledWith([1, 0]);

    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(getByText('Panel 2'));
    expect(onActive).toBeCalledWith([0]);

    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(getByText('Panel 1'));
    expect(onActive).toBeCalledWith([]);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('custom accordion', () => {
    const { container } = render(
      <MnetUIBase theme={customTheme}>
        <Accordion>
          <AccordionPanel label="Panel 1">Panel body 1</AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });

  test('accordion border', () => {
    const { container } = render(
      <MnetUIBase
        theme={{
          accordion: {
            border: undefined,
            panel: {
              border: {
                side: 'horizontal',
              },
            },
          },
        }}
      >
        <Accordion>
          <AccordionPanel label="Panel 1">Panel body 1</AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });

  test('accordion border', () => {
    const { container } = render.create(
      <MnetUIBase
        theme={{
          accordion: {
            border: undefined,
            panel: {
              border: {
                side: 'horizontal',
              },
            },
          },
        }}
      >
        <Accordion>
          <AccordionPanel label="Panel 1">Panel body 1</AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );
    expect(container).toMatchSnapshot();
  });

  test('change active index', () => {
    const onActive = jest.fn();
    const { getByText, container } = render(
      <MnetUIBase>
        <Accordion animate={false} activeIndex={1} onActive={onActive}>
          <AccordionPanel label="Panel 1">Panel body 1</AccordionPanel>
          <AccordionPanel label="Panel 2">Panel body 2</AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(getByText('Panel 1'));
    expect(onActive).toBeCalledWith([0]);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('focus and hover styles', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const { getByText, container } = render(
      <MnetUIBase theme={{ accordion: { hover: { color: 'red' } } }}>
        <Accordion>
          <AccordionPanel
            label="Panel 1"
            onMouseOver={() => {}}
            onMouseOut={() => {}}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            Panel body 1
          </AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );

    fireEvent.focus(getByText('Panel 1'));
    expect(container.firstChild).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  test('backward compatibility of hover.color = undefined', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const { getByText, container } = render(
      <MnetUIBase
        theme={{
          accordion: {
            hover: { color: undefined },
          },
        }}
      >
        <Accordion>
          <AccordionPanel
            label="Panel 1"
            onMouseOver={() => {}}
            onMouseOut={() => {}}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            Panel body 1
          </AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );

    fireEvent.focus(getByText('Panel 1'));
    // hover color should be undefined
    expect(container.firstChild).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  test('theme hover of hover.heading.color', () => {
    const { getByText, container } = render(
      <MnetUIBase
        theme={{
          accordion: {
            hover: { heading: { color: 'teal' } },
          },
        }}
      >
        <Accordion>
          <AccordionPanel
            label="Panel 1"
            onMouseOver={() => {}}
            onMouseOut={() => {}}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            Panel body 1
          </AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );

    fireEvent.focus(getByText('Panel 1'));
    // hover color should be undefined
    expect(container.firstChild).toMatchSnapshot();
  });

  test('focus and hover styles', () => {
    const { getByText, container } = render(
      <MnetUIBase theme={{ accordion: { hover: { color: 'red' } } }}>
        <Accordion>
          <AccordionPanel
            label="Panel 1"
            onMouseOver={() => {}}
            onMouseOut={() => {}}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            Panel body 1
          </AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );

    fireEvent.focus(getByText('Panel 1'));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('backward compatibility of hover.color = undefined', () => {
    const { getByText, container } = render(
      <MnetUIBase
        theme={{
          accordion: {
            hover: { color: undefined },
          },
        }}
      >
        <Accordion>
          <AccordionPanel
            label="Panel 1"
            onMouseOver={() => {}}
            onMouseOut={() => {}}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            Panel body 1
          </AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );

    fireEvent.focus(getByText('Panel 1'));
    // hover color should be undefined
    expect(container.firstChild).toMatchSnapshot();
  });

  test('theme hover of hover.heading.color', () => {
    const { getByText, container } = render(
      <MnetUIBase
        theme={{
          accordion: {
            hover: { heading: { color: 'teal' } },
          },
        }}
      >
        <Accordion>
          <AccordionPanel
            label="Panel 1"
            onMouseOver={() => {}}
            onMouseOut={() => {}}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            Panel body 1
          </AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );

    fireEvent.focus(getByText('Panel 1'));
    // hover color should be undefined
    expect(container.firstChild).toMatchSnapshot();
  });

  test('set on hover', () => {
    const { getByText, container } = render(
      <MnetUIBase>
        <Accordion>
          <AccordionPanel
            label="Panel 1"
            onMouseOver={() => {}}
            onMouseOut={() => {}}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            Panel body 1
          </AccordionPanel>
          <AccordionPanel
            label="Panel 2"
            onMouseOver={() => {}}
            onMouseOut={() => {}}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            Panel body 2
          </AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.mouseOver(getByText('Panel 1'));
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.mouseOver(getByText('Panel 2'));
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.mouseOut(getByText('Panel 1'));
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.mouseOut(getByText('Panel 2'));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('wrapped panel', () => {
    const onActive = jest.fn();
    const Panel = ({ index }) => (
      <AccordionPanel label={`Panel ${index}`}>
        Panel body {index}
      </AccordionPanel>
    );
    const { getByText, container } = render(
      <MnetUIBase>
        <Accordion animate={false} onActive={onActive}>
          {[1, 2].map(index => (
            <Panel key={index} index={index} />
          ))}
        </Accordion>
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(getByText('Panel 1'));
    expect(onActive).toBeCalledWith([0]);
    expect(getByText('Panel body 1')).not.toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('blur styles', () => {
    const onBlur = jest.fn();
    const { container, getByText } = render(
      <MnetUIBase 
        theme={{ accordion: { hover: { heading: { color: 'red' } } } }}
      >
        <Accordion>
          <AccordionPanel
            label="Panel 1"
            onMouseOver={() => {}}
            onMouseOut={() => {}}
            onFocus={() => {}}
            onBlur={onBlur}
          >
            Panel body 1
          </AccordionPanel>
        </Accordion>
      </MnetUIBase>,
    );
    // focus first then call blur
    fireEvent.focus(getByText('Panel 1'));
    fireEvent.blur(getByText('Panel 1'));
    expect(container.firstChild).toMatchSnapshot();
    expect(onBlur).toHaveBeenCalled();
  });
});
