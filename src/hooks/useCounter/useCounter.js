import { useMemo, useState } from 'react';
import { inc, dec, max, min } from 'ramda';

const useCounter = (initialValue, options = {}) => {
  const { minValue, maxValue } = options;
  const [value, setValue] = useState(initialValue);

  const handlers = useMemo(
    () => ({
      increment: () => {
        setValue((prevValue) => {
          const newValue = inc(prevValue);
          return min(newValue, maxValue);
        });
      },
      decrement: () => {
        setValue((prevValue) => {
          const newValue = dec(prevValue);
          return max(newValue, minValue);
        });
      },
    }),
    []
  );

  return [value, handlers];
};

export default useCounter;
