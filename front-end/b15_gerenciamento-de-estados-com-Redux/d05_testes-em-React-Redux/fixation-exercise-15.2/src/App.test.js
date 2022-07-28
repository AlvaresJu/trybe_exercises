import renderWithRedux from "./helpers/renderWithRedux";
import React from 'react'
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a initial click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('clicks in a button should increment the value of clicks', () => {
    const initialState = {
      clickReducer: {
        counter: 10
      }
    };
    renderWithRedux(<App />, { initialState });
    const buttonAdicionar = screen.queryByText('Clique aqui');
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('11')).toBeInTheDocument();

    userEvent.click(buttonAdicionar);
    expect(screen.getByText('12')).toBeInTheDocument();
  });
});
