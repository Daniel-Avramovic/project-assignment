import React from 'react';
import ReactDOM from 'react-dom';
import Header from './../Header';
import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders without crashing', ()=>{
    const header = document.createElement('header');
    ReactDOM.render(<Header/>, header);    
});

it('renders header corectly', ()=>{
    const {getByTestId} = render(<Header/>);
    expect(getByTestId('header')).toHaveTextContent('Project Assingment')
})
