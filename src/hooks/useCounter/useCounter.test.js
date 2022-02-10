import { renderHook, act } from '@testing-library/react-hooks';

import useCounter from './useCounter';

describe('useCounter', () => {
  it('should be correctly set initial value', () => {
    const initialValue = 0;
    const { result } = renderHook(() => useCounter(initialValue));
    const [state] = result.current;
    expect(state).toEqual(initialValue);
  });
  it('should increment correctly', () => {
    const { result } = renderHook(() => useCounter(0));
    const [, { increment }] = result.current;
    act(() => increment());
    expect(result.current[0]).toEqual(1);
  });
  it('should not increment if new value will be greater than max value from options', () => {
    const { result } = renderHook(() => useCounter(0, { maxValue: 2 }));
    const [, { increment }] = result.current;
    act(() => increment());
    expect(result.current[0]).toEqual(1);
    act(() => increment());
    expect(result.current[0]).toEqual(2);
    act(() => increment());
    expect(result.current[0]).toEqual(2);
  });
  it('should decrement correctly', () => {
    const { result } = renderHook(() => useCounter(0));
    const [, { decrement }] = result.current;
    act(() => decrement());
    expect(result.current[0]).toEqual(-1);
  });
  it('should not decrement if new value will be less than min value from options', () => {
    const { result } = renderHook(() => useCounter(0, { minValue: -2 }));
    const [, { decrement }] = result.current;
    act(() => decrement());
    expect(result.current[0]).toEqual(-1);
    act(() => decrement());
    expect(result.current[0]).toEqual(-2);
    act(() => decrement());
    expect(result.current[0]).toEqual(-2);
  });
});
