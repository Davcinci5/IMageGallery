import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from './Grid';
import store from "../../redux/store";
import { Provider } from 'react-redux';

const Wrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse)
  })
});
const mockResponse = [{ url: 'https://cdn2.thecatapi.com/images/1qv.jpg',
width: 500,
height: 333 },
{ url: 'https://cdn2.thecatapi.com/images/a68.jpg',
width: 500,
height: 337 },
{ url: 'https://cdn2.thecatapi.com/images/ark.jpg',
width: 424,
height: 640 },
{ url: 'https://cdn2.thecatapi.com/images/c8b.jpg',
width: 820,
height: 1024 },
{ url: 'https://cdn2.thecatapi.com/images/clb.jpg',
width: 1632,
height: 1224 },
{ url: 'https://cdn2.thecatapi.com/images/MTcyMDExMw.jpg',
width: 2736,
height: 3648 },
{ url: 'https://cdn2.thecatapi.com/images/MTc1MDkyNQ.jpg',
width: 500,
height: 363 },
{ url: 'https://cdn2.thecatapi.com/images/MjA4NDEyNw.jpg',
width: 1157,
height: 481 },
{ url: 'https://cdn2.thecatapi.com/images/MWPRkZh6u.jpg',
width: 1080,
height: 1350 },
{ url: 'https://cdn2.thecatapi.com/images/i09XrFzP9.png',
width: 2232,
height: 1920 }];

describe('Grid', () => {
  test('renders Grid component', async() => {
    render(<Grid/>, { wrapper: Wrapper });
    expect(screen.queryByAltText('kitty')).toBeNull();
    await screen.findAllByAltText('kitty');
    expect(global.fetch).toHaveBeenCalledTimes(1)
    screen.debug();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
});




