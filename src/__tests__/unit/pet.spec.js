import {rest} from 'msw';
import {setupServer} from 'msw/node';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {fetchPets} from '../../state/pet/actions';
import * as types from '../../state/pet/constants';
import petsData from '../data/petsData.json';
import initialState from '../../state/pet/initialState';

// const server = setupServer(
//   rest.get("http://localhost/pets", (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json(petsData));
//   })
// );

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("fetch pets data and dispatch actions", async () => {
  const expectedActions = [
    { type: types.FETCH_PETS_REQUEST },
    {
        type: types.FETCH_PETS_SUCCESS,
        payload: petsData.pets,
    },
  ];

  const store = mockStore({ pets: initialState });
  return store.dispatch(fetchPets())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
});