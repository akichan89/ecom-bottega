import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form';
import SignInForm from './signinForm';
import PageTitle from '../pageTitle';

export default class SignIn extends Component {
  onSubmit = (fields) => {
      console.log(fields);
  }
  

  render() {
      return (
        <div className='sign-in'>
        <PageTitle className='sign-in__page-title' title='Login' />
        <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
    </div>
      )
  }
}

