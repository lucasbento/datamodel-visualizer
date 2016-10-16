import * as React from 'react'
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import './ListPage.styl'

interface Props {
  data: any
}

class ListPage extends React.Component<Props,{}> {

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }
    console.log(this.props)
    return (
      <div className='w-100 flex-column justify-center'>
        {this.props.data.viewer.user.projects.edges.map(edge => (
          <div>
            <Link to={`/${edge.node.id}`}>{edge.node.name}</Link>
          </div>
        ))}
      </div>
    )
  }
}


const ProjectsQuery = gql`
 query {
  viewer {
    user {
      projects {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
}
`

const ListPageWithData = graphql(ProjectsQuery)(ListPage)

export default ListPageWithData
