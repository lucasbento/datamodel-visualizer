import * as React from 'react'
import { Link } from 'react-router'
import Post from '../components/Post'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

interface Props {
  data: any
}

class ListPage extends React.Component<Props,{}> {

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }
    return (
      <div className='w-100 flex justify-center'>
        <Link to='/create' className='fixed bg-white top-0 right-0 pa4 ttu dim black no-underline'>
          + New Post
        </Link>
        <div className='w-100' style={{ maxWidth: 400 }}>
          {this.props.data.allPosts.reverse().map((post) =>
            <Post key={post.id} post={post} refresh={() => this.props.data.refetch()} />
          )}
        </div>
      </div>
    )
  }
}

const FeedQuery = gql`query { allPosts { id imageUrl description } }`

const ListPageWithData = graphql(FeedQuery, {options: { pollInterval: 1000 } })(ListPage)

export default ListPageWithData
