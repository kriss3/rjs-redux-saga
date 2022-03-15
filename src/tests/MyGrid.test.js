import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useTable } from 'react-table';
import MyGrid from '../MyGrid'

configure({ adapter: new Adapter() });

jest.mock('react-table', () => ({
    ...jest.requireActual('react-table'),
    useTable: jest.fn(jest.requireActual('react-table').useTable),
}));

describe('should return correct result', () => {
    
    beforeEach(() => {
        const wrapper = shallow(<MyGrid />);
    });

    afterEach(() => {
        useTable.mockClear();
    });

    it('should add two numbers correctly', () => {
        expect(2 + 2).toEqual(4);
    });

    it('checks if wrapper is valid', () => {
        const { columns } = useTable.mock.calls[0][0];
        console.log(columns.text());
    });
});