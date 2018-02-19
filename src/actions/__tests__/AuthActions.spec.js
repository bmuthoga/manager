// import configureMockStore from 'redux-mock-store';
// import ReduxThunk from 'redux-thunk';
import { emailChanged, passwordChanged, loginUser } from '../';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../types';

// const middlewares = [ReduxThunk];
// const mockStore = configureMockStore(middlewares);
// const store = mockStore({});

describe('>>>A C T I O N --- Test AuthActions', () => {
  // beforeEach(() => {
  //   store.clearActions();
  // });

  it('+++ actionCreator emailChanged', () => {
    const onEmailChange = emailChanged('email@email.com');

    expect(onEmailChange).toEqual({
      type: EMAIL_CHANGED,
      payload: 'email@email.com'
    });
  });

  it('+++ actionCreator passwordChanged', () => {
    const onPasswordChange = passwordChanged('password');

    expect(onPasswordChange).toEqual({
      type: PASSWORD_CHANGED,
      payload: 'password'
    });
  });

  // it('+++ actionCreator loginUser correct credentials', async () => {
  //   const email = 'email@email.com';
  //   const password = 'password';

  //   // store.clearActions();

  //   await store.dispatch(loginUser({ email, password }))
  //     .then(() => {
  //       expect(store.getActions()).toMatchSnapshot();
  //     });
  // });

  // it('+++ actionCreator loginUser incorrect credentials', async () => {
  //   const email = 'wrongemail@email.com';
  //   const password = 'wrongpassword';

  //   await store.dispatch(loginUser({ email, password }))
  //     .catch(() => {
        
  //     })
  // });
});
