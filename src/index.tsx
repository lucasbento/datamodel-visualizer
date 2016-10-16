// TS-lint disabled because otherwise React is not defined.
import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import ListPage from './components/ListPage'
import CreatePage from './components/CreatePage'
import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import 'tachyons'
import './index.css'

const networkInterface = createNetworkInterface('https://api.graph.cool/simple/v1/__PROJECT_ID__')

// This is to let the server know that the example app has started. (Not necessary for normal projects)
networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      // Create the header object if needed.
      req.options.headers = {}
    }
    req.options.headers['x-graphcool-source'] = 'example:react-apollo-instagram'
    next()
  },
}])

const client = new ApolloClient({ networkInterface })

ReactDOM.render(
  (
    <ApolloProvider client={client}>
      <Router history={browserHistory}>
        <Route path='/' component={ListPage} />
        <Route path='/create' component={CreatePage} />
      </Router>
    </ApolloProvider>
  ),
  document.getElementById('root')
)
