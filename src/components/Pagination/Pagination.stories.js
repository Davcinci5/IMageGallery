import React from 'react';
import {PaginationC} from './Pagination';
import { action } from '@storybook/addon-actions';


export default {
    title: 'Pagination',
    component: PaginationC,
    argTypes: {
         changePage: { action: 'clicked' }
        },
      }
      
      const Template = args => <PaginationC {...args} />;
      
      export const Pagination = Template.bind({});
      
      Pagination.args = {
        page: 1,
        count: 10,
        useHistory: ()=>({
          push: action('onPushQuery')
        })
      };
      
