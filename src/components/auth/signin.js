import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form';
import SignInForm from './signinForm';

export default class SignIn extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div className="sign-in">
              <SignInForm className='sign-in__form' />
          </div>
      )
  }
}

