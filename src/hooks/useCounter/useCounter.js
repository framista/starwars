import { useMemo, useState } from 'react';
import { inc, dec, gt, lt } from 'ramda';

const useCounter = (initialValue, options = {}) => {
  const { minValue, maxValue } = options;
  const [value, setValue] = useState(initialValue);

  const handlers = useMemo(
    () => ({
      increment: () => {
        setValue((prevValue) => {
          const newValue = inc(prevValue);
          return gt(newValue, maxValue) ? prevValue : newValue;
        });
      },
      decrement: () => {
        setValue((prevValue) => {
          const newValue = dec(prevValue);
          return lt(newValue, minValue) ? prevValue : newValue;
        });
      },
    }),
    []
  );

  return [value, handlers];
};

export default useCounter;
