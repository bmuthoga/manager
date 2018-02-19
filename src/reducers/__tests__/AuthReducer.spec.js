import AuthReducer from '../AuthReducer';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

describe('>>>R E D U C E R --- Test AuthReducer', () => {
  it('+++ reducer for EMAIL_CHANGED', () => {
    const emailChanged = AuthReducer(INITIAL_STATE, {
      type: EMAIL_CHANGED,
      payload: 'email@email.com'
    });

    expect(emailChanged).toEqual({
      ...INITIAL_STATE,
      email: 'email@email.com'
    });
  });

  it('+++ reducer for PASSWORD_CHANGED', () => {
    const passwordChanged = AuthReducer(INITIAL_STATE, {
      type: PASSWORD_CHANGED,
      payload: 'password'
    });

    expect(passwordChanged).toEqual({ ...INITIAL_STATE, password: 'password' });
  });

  it('+++ reducer for LOGIN_USER', () => {
    const loginUser = AuthReducer(INITIAL_STATE, {
      type: LOGIN_USER
    });

    expect(loginUser).toEqual({ ...INITIAL_STATE, loading: true, error: '' });
  });

  it('+++ reducer for LOGIN_USER_FAIL', () => {
    const loginUserFail = AuthReducer(INITIAL_STATE, {
      type: LOGIN_USER_FAIL
    });

    expect(loginUserFail).toEqual({
      ...INITIAL_STATE,
      error: 'Authentication Failed.',
      password: '',
      loading: false
    });
  });
});
