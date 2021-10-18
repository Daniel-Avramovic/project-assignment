import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Footer from '../Footer';

afterEach(cleanup);

it('renders without crashing', ()=> {
    const footer = document.createElement('footer');
    ReactDOM.render(<Footer />, footer)
});

it('correct text content', ()=> {
    const { getByTestId } = render(<Footer/>);
    expect(getByTestId('footer')).toHaveTextContent('© 2021 Copyrigt Daniel Avramovic')
})