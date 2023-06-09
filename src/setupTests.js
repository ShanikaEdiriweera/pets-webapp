// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import {rest} from 'msw';
import {setupServer} from 'msw/node';

import pets from './state/pet/initialState';
import petsData from './__tests__/data/petsData.json';


console.log('SETUP TESTS========================')

const server = setupServer(
  rest.get("/pets", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(petsData));
  })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

export const initialState = { pets };