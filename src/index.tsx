// TS-lint disabled because otherwise React is not defined.
import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import ListPage from './components/ListPage'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import 'tachyons'
import './index.css'
import Root from './Root'
import ModulePage from './components/ModulePage'

const token = localStorage.getItem('token')
const headers = token ? { Authorization: `Bearer ${token}` } : null

const networkInterface = createNetworkInterface('https://api.graph.cool/v1/system', { headers })

// This is to let the server know that the example app has started. (Not necessary for normal projects)
// networkInterface.use([{
//   applyMiddleware (req, next) {
//     if (!req.options.headers) {
//       // Create the header object if needed.
//       req.options.headers = {}
//     }
//     req.options.headers['x-graphcool-source'] = 'example:react-apollo-instagram'
//     req.options.
//     next()
//   },
// }])

const client = new ApolloClient({ networkInterface })

ReactDOM.render(
  (
    <ApolloProvider client={client}>
      <Router history={browserHistory}>
        <Route path='/' component={Root}>
          <IndexRoute component={ListPage} />
          <Route  path="/:projectId" component={ModulePage} />
        </Route>
      </Router>
    </ApolloProvider>
  ),
  document.getElementById('root')
)
