import * as React from 'react'

import { Link } from 'react-router'
import Login from './components/Login/Login'

interface Props {
  children: any
}

export default class Root extends React.Component<Props,{}> {
  render () {
    return (
      <div>
        {localStorage.getItem('token') ? (
          <div>
            <header className='flex align-content justify-content'>
              <Link to='/' className='without'>
                <h1>GRAPHCOOL Model Visualizer</h1>
              </Link>
              <span onClick={this.logout}>Logout</span>
            </header>
            {this.props.children}
          </div>
        ) : (
          <Login />
        )}
      </div>
    )

  }

  private logout = () => {
    localStorage.clear()
    location.replace('/')
    location.reload()
  }
}
