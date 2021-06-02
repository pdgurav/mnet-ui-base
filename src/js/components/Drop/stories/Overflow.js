import React, { useEffect, useRef, useState } from 'react';

import { Box, Calendar, Drop, Heading, TextInput, mnet } from 'mnet-ui-base';
import { MnetUIBase } from '../../MnetUIBase';

const OverflowDrop = () => {
  const targetRef = useRef();
  const inputRef = useRef();

  const [date, setDate] = useState(undefined);
  const [showCalendar, setShowCalendar] = useState(false);

  const onSelect = nextDate => {
    setDate(nextDate !== date ? nextDate : undefined);
    setShowCalendar(false);
  };

  const [, setShowDrop] = useState(false);
  useEffect(() => setShowDrop(true), []);

  return (
    <MnetUIBase
      theme={mnet}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Box fill align="center" justify="center">
        <Box
          background="dark-3"
          pad="medium"
          align="center"
          justify="start"
          ref={targetRef}
        >
          Target
        </Box>
        {targetRef.current && (
          <Drop
            overflow="unset"
            align={{ top: 'bottom', left: 'left' }}
            target={targetRef.current}
            onClose={() => setShowCalendar(false)}
          >
            <Box height="small">
              <Heading level={4}>Select Start Date</Heading>
              <div style={{ position: 'relative' }}>
                <TextInput
                  ref={inputRef}
                  value={date || ''}
                  placeholder="Focus on me"
                  onFocus={() => setShowCalendar(true)}
                />
                {showCalendar && (
                  <div style={{ position: 'absolute', background: '#eee' }}>
                    <Calendar date={date} onSelect={onSelect} size="small" />
                  </div>
                )}
              </div>
            </Box>
          </Drop>
        )}
      </Box>
    </MnetUIBase>
  );
};

export const Overflow = () => <OverflowDrop />;
Overflow.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Drop/Overflow',
};
