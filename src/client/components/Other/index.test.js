import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Other } from '.';
import store from '../../store';

describe('Other', () => {
    it('should render the passed props', () => {
        const { getByText } = render(<Provider store={store}>
            <Other name="passed name" title="test title" />
        </Provider>);
        expect(getByText(/passed name/)).toBeInTheDocument();
        expect(getByText('test title'));
    });
})