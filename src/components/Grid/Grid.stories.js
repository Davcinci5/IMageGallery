import React from 'react';
import {Grid }from'./Grid';
//Images
import cold from '../../images/cold.jpg';
import woodedRainy from '../../images/wooded_rainy.png';
import wooded from '../../images/wooded.jpg'
import chameleon from '../../images/chameleon.png';
import animals from '../../images/animals.png'

export default {
    title: 'Grid',
    component: Grid,
    argTypes: { changeSize: { action: 'loaded' } }
}

const Template = (args) => <Grid {...args}/>;

export const SixImages = Template.bind({});
SixImages.args = {
    arreImages:[{src: cold, width: 1 , height: 1},
                {src: wooded, width: 2 , height: 1},
                {src: woodedRainy, width: 1 , height: 2},
                {src: cold, width: 1 , height: 1},
                {src: wooded, width: 2 , height: 1},
                {src: woodedRainy, width: 1 , height: 2}
],
    page: 1,
    count: 10
}

export const TwelveImages = Template.bind({});
TwelveImages.args = {
    arreImages:[{src: cold, width: 1 , height: 1},
                {src: wooded, width: 2 , height: 1},
                {src: woodedRainy, width: 1 , height: 2},
                {src: cold, width: 1 , height: 1},
                {src: wooded, width: 2 , height: 1},
                {src: woodedRainy, width: 1 , height: 2},
                {src: animals, width: 1 , height: 2},
                {src: chameleon, width: 1 , height: 1},
                {src: animals, width: 2 , height: 1},
                {src: chameleon, width: 1 , height: 2}
],
    page: 1,
    count: 10
}