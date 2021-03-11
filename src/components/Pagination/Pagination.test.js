import React from'react';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';
import store from "../../redux/store";
import { Provider } from 'react-redux';

const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  const push = jest.fn();
  const useHistory = ()=>({
    push
  })

  describe('Pagination', () => {
    test('renders Pagination component', () => {
      render(<Pagination useHistory={useHistory}/>, { wrapper: Wrapper });
      expect(screen.getByRole('button', {name: 'page 1'})).toHaveAttribute('aria-current','true')
      
      
      userEvent.click(screen.getByRole('button', {name: 'Go to page 10'}))
      
      
      expect(screen.getByRole('button', {name: 'page 10'})).toHaveAttribute('aria-current','true')
      
      userEvent.click(screen.getByRole('button', {name: 'Go to page 8'}))
      expect(screen.getByRole('button', {name: 'page 8'})).toHaveAttribute('aria-current','true')
      
      userEvent.click(screen.getByRole('button', {name: 'Go to page 1'}))
      expect(push).toBeCalledTimes(7)
      expect(screen.getByRole('button', {name: 'page 1'})).toHaveAttribute('aria-current','true')
    

      screen.debug();
    });
  });