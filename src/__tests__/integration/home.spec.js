/**
 * @jest-environment jsdom
 */
import React from 'react'; // so that we can use JSX syntax
import {
 render,
 cleanup,
 waitFor,
 screen
} from '@testing-library/react'; // testing helpers
import userEvent from '@testing-library/user-event' // testing helpers for imitating user events
// import 'jest-dom/extend-expect'; // to extend Jest's expect with DOM assertions // check setupTests.js
import nock from 'nock'; // to mock github API

import App from '../../App'; // the app that we are going to test

import petsData from '../data/petsData.json';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from '../../setupTests';
import moxios from 'moxios';
import { axiosInstance } from '../../services/HttpService';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const server = setupServer(
  rest.get("http://localhost/pets", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(petsData));
  })
);

describe('test amazing pets app home', () => {
  // beforeAll(() => {
  // beforeEach(() => {
  //   nock('http://localhost')
  //     // .persist()
  //     .get(`/pets`)
  //     // .query(true)
  //     .reply(200, petsData);
  // });

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  // beforeEach(() => {
  //   moxios.install(axiosInstance);
  // });

  // afterEach(() => {
  //   moxios.uninstall(axiosInstance);
  // });
 
  afterEach(cleanup);
 
  describe('when user search for pets', () => {
    // it('user can view the list of public repositories for entered GitHub username', async () => {
    //   // arrange
    //   const { getByText, getByPlaceholderText, queryByText } = render(<App />);

    //   // act
    //   userEvent.type(getByPlaceholderText('userSelection.usernamePlaceholder'), FAKE_USERNAME_WITH_REPOS);  expect(getByPlaceholderText('userSelection.usernamePlaceholder')).toHaveAttribute('value', FAKE_USERNAME_WITH_REPOS);
    //   userEvent.click(getByText('userSelection.submitButtonText').closest('button'));
    //   getByText('repositories.header');
    //   getByText('repositories.loadingText');
      
    //   // assert
    //   expect(queryByText('repositories.empty')).toBeNull();
    //   await waitFor(() => REPOS_LIST.reduce((elementsToWaitFor, repository) => {
    //     elementsToWaitFor.push(getByText(repository.name));
    //     elementsToWaitFor.push(getByText(repository.description));
    //     return elementsToWaitFor;
    //   }, []));
    //   expect(queryByText('repositories.loadingText')).toBeNull();
    //   expect(queryByText('repositories.error')).toBeNull();
    // });

    it('user is presented with a matching pet results', async () => {
      // moxios.wait(() => {
      //   const request = moxios.requests.mostRecent();
      //   request.respondWith({
      //     status: 200,
      //     response: petsData,
      //   });
      // });

      // moxios.stubRequest(/.*pets.*/, {
      //   status: 200,
      //   response: petsData,
      // });
      // arrange
      const { getByText, getByPlaceholderText, findByText } = render(
        <Provider store={mockStore(initialState)} >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      // act
      await screen.findByText(/Results/i);

      // assert
      expect(getByText(/Results/i)).toBeInTheDocument();
    });
  });
 
 
  // describe('when GitHub user has no public repositories', () => {
  //   it('user is presented with a message that there are no public repositories for entered GitHub username', async () => {
  //     // arrange
  //     // act
  //     // assert
  //   });
  // });
 
  // describe('when GitHub user does not exist', () => {
  //   it('user is presented with an error message', async () => {
  //     // arrange
  //     // act
  //     // assert
  //   });
  // });
 });