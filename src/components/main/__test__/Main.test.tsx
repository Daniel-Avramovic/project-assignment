import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import Main from '../Main';
import { store } from '../../../state/store';

afterEach(cleanup);

it('renders wihtout crashing',()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Main/></Provider> , div);
});

it('samething',()=>{
    const { getByTestId } = render(<Main />);
    expect(getByTestId('main')).toBeTruthy();

})