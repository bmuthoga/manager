import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import { openEmployeeCreate } from './actions';

class RouterComponent extends Component {
  render() {
    return (
      // Can add prop sceneStyle={{ paddingTop: 65 }} to below Router tag if scene title is
      // overlaying other elements
      <Router>
        <Scene key="root">
          <Scene key="auth" hideNavBar>
            <Scene
              key="login"
              component={LoginForm}
              title="Please Login"
              hideNavBar={false}
            />
          </Scene>

          <Scene key="main" hideNavBar>
            <Scene
              key="employeeList"
              component={EmployeeList}
              title="Employees"
              renderBackButton={() => null}
              hideNavBar={false}
              onRight={() => this.props.openEmployeeCreate()}
              rightTitle="Add"
            />
            <Scene
              key="employeeCreate"
              component={EmployeeCreate}
              title="Create Employee"
              hideNavBar={false}
            />
            <Scene
              key="employeeEdit"
              component={EmployeeEdit}
              title="Edit Employee"
              hideNavBar={false}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default connect(null, { openEmployeeCreate })(RouterComponent);
