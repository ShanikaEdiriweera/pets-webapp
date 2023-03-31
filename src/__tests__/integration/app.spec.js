import React from 'react'; // so that we can use JSX syntax
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '../../App';
import { initialState } from '../../setupTests';
import nock from 'nock'; // to mock github API

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('renders pet app text', () => {
  beforeAll(() => {
    // console.log('beforeAll', process.env)
    nock('https://test.mockapi.io/api/v1')
      .persist()
      .get(`/pets`)
      // .query(true)
      .reply(200, petsData);
  });

  render(
    <Provider store={mockStore(initialState)} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  const h2El = screen.getAllByText(/Pets Directory/)[0];
  expect(h2El).toBeInTheDocument();
});
