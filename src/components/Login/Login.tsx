import * as React from 'react'

import { graphql } from 'react-apollo'

import LoginForm from './LoginForm';
import './Login.styl'
import gql from 'graphql-tag/index'
import {withRouter} from 'react-router'
import {MutationInput} from '../../types'

interface Props {
  router: any
  mutate: (input: MutationInput) => Promise<any>
}

interface State {
  errors: any
}

class Login extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      errors: null
    };
  }
  render () {
    const { errors } = this.state;
    return (
      <div className="login-wrapper">
        <div className="login">
          <h1>GRAPHCOOL Model Visualizer</h1>
          <LoginForm handleSubmit={this.handleSubmit} />
            {errors && (
              errors.map(err => (
                <span className="error">{err.message}</span>
              ))
            )}
        </div>
      </div>
    )
  }
  private handleSubmit = (email, password) => {
    this.props.mutate({variables: {email, password}})
      .then(({errors, data}) => {
        if (!errors) {
          const { token } = data.signinCustomer
          localStorage.setItem('token', token)
          location.reload()
        } else {
          console.error(errors)
          this.setState({errors})
        }
      })
  }
}

const signinMutation = gql`
    mutation ($email: String!, $password: String!){
        signinCustomer(input: {
            email: $email
            password: $password
            clientMutationId: "asd"
        }) {
            token
        }
    }
`

const PageWithMutation = graphql(signinMutation)(withRouter(Login))

export default PageWithMutation
