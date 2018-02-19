import EmployeeFormReducer from '../EmployeeFormReducer';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS,
    OPEN_EMPLOYEE_CREATE
} from '../../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

describe('>>>R E D U C E R --- Test EmployeeFormReducer', () => {
    it('+++ reducer for EMPLOYEE_UPDATE', () => {
        const employeeUpdate = EmployeeFormReducer(INITIAL_STATE, {
            type: EMPLOYEE_UPDATE,
            payload: { prop: 'name', value: 'Jane' }
        });

        expect(employeeUpdate).toEqual({ ...INITIAL_STATE, name: 'Jane' });
    });
});
