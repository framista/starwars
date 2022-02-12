import { renderHook } from '@testing-library/react-hooks';
import { rest } from 'msw';

import {
  API_URL,
  STAR_WARS_API_PEOPLE_DATA,
  STAR_WARS_API_PEOPLE_ERROR,
} from '../../mocks/api.mocks';
import { server } from '../../mocks/server';

import useFetch from './useFetch';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('useFetch initially', () => {
  it('should be loading truthy initially', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(API_URL));
    await waitForNextUpdate();
    expect(result.all[0].loading).toBeTruthy();
  });
  it('should be data set to null initially', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(API_URL));
    await waitForNextUpdate();
    expect(result.all[0].data).toBeNull();
  });
  it('should be error falsy initially', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(API_URL));
    await waitForNextUpdate();
    expect(result.all[0].error).toBeFalsy();
  });
});

describe('useFetch successfully fetching', () => {
  it('should be data set to correct data after successfully fetching', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(API_URL));
    await waitForNextUpdate();
    const { data } = result.current;
    expect(data).toEqual(STAR_WARS_API_PEOPLE_DATA);
  });
  it('should be loading set to false after successfully fetching', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(API_URL));
    await waitForNextUpdate();
    const { loading } = result.current;
    expect(loading).toBeFalsy();
  });
  it('should be error set to false after successfully fetching', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(API_URL));
    await waitForNextUpdate();
    const { error } = result.current;
    expect(error).toBeFalsy();
  });
});

describe('useFetch failed fetching', () => {
  beforeEach(() => {
    server.use(
      rest.get(API_URL, (req, res, ctx) => {
        return res(ctx.status(404), ctx.json(STAR_WARS_API_PEOPLE_ERROR));
      })
    );
  });
  it('should be loading set to false after failed fetching', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(API_URL));
    await waitForNextUpdate();
    const { loading } = result.current;
    expect(loading).toBeFalsy();
  });
  it('should be error set to true after failed fetching', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(API_URL));
    await waitForNextUpdate();
    const { error } = result.current;
    expect(error).toBeTruthy();
  });
});
