import * as React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {MutationInput} from '../types'

interface Props {
  post: any,
  mutate: (input: MutationInput) => Promise<{}>
  refresh: () => void
}

class Post extends React.Component<Props,{}> {

  render () {
    return (
      <div className='pa3 bg-black-05 ma3'>
        <div
          className='w-100'
          style={{
            backgroundImage: `url(${this.props.post.imageUrl})`,
            backgroundSize: 'cover',
            paddingBottom: '100%',
          }}
        />
        <div className='pt3'>
          {this.props.post.description}&nbsp;
          <span className='red f6 pointer dim' onClick={this.handleDelete}>Delete</span>
        </div>
      </div>
    )
  }

  handleDelete = () => {
    this.props.mutate({variables: {id: this.props.post.id}})
      .then(this.props.refresh)
  }
}

const deleteMutation = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

const PostWithMutation = graphql(deleteMutation)(Post)

export default PostWithMutation
