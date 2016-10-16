import * as React from 'react'

interface Props {
  handleSubmit(email: string, password: string): void
}

interface State {
  email: string
  password: string
}

class LoginForm extends React.Component<Props,State> {

  state = {
    email: '',
    password: '',
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          value={this.state.email}
          onChange={this.emailChange}
        />
        <input
          type='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.passwordChange}
        />
        <input className='submit' type='submit' value='Login' />
      </form>
    )
  }

  private emailChange = (e: any) => {
    this.setState({email: e.target.value} as State)
  }

  private passwordChange = (e: any) => {
    this.setState({password: e.target.value} as State)
  }

  private handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.handleSubmit(this.state.email, this.state.password)
  }
}

export default LoginForm

