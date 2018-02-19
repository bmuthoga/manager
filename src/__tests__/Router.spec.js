import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Router from '../Router';

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};

describe('>>>R O U T E R --- Test Router', () => {
    it('+++ renders correctly', () => {
        const wrapper = shallow(
            <Router />,
            { context: { store: mockStore(initialState) } }
        );

        expect(wrapper.dive()).toMatchSnapshot();
    });
});
