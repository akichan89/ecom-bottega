import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form';
import SignInForm from './signinForm';

export default class SignIn extends Component {
  onSubmit = (fields) => {
      console.log(fields);
  }
  

  render() {
      return (
          <div className="sign-in">
              <SignInForm onSubmit={this.onSubmit}className='sign-in__form' />
          </div>
      )
  }
}

