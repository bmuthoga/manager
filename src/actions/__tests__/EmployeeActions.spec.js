import configureMockStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import { Actions } from 'react-native-router-flux';
import {
  employeeUpdate,
  employeeCreate,
  employeesFetch,
  employeeSave,
  employeeDelete,
  openEmployeeCreate
} from '../';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  OPEN_EMPLOYEE_CREATE
} from '../types';

const middlewares = [ReduxThunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('>>>A C T I O N --- Test EmployeeActions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('+++ actionCreator openEmployeeCreate', () => {
        // const onRightButtonPress = openEmployeeCreate();

        // store.dispatch(openEmployeeCreate());
        // expect(store.getActions()).toMatchSnapshot();
    });
});
