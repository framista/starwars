import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { API_URL, STAR_WARS_API_PEOPLE_DATA } from './api.mocks';

const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(STAR_WARS_API_PEOPLE_DATA));
  }),
];

const server = setupServer(...handlers);

export { server, rest };
