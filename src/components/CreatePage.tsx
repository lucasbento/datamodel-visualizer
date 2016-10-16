import * as React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {MutationInput} from '../types'

interface Props {
  router: any,
  mutate: (input: MutationInput) => Promise<{}>
}

interface State {
  description: string,
  imageUrl: string
}

class CreatePage extends React.Component<Props,State> {

  state = {
    description: '',
    imageUrl: '',
  }

  render () {
    console.log(this.props)
    return (
      <div className='w-100 pa4 flex justify-center'>
        <div style={{ maxWidth: 400 }} className=''>
          <input
            className='w-100 pa3 mv2'
            value={this.state.description}
            placeholder='Description'
            onChange={(e: any) => this.setState({
              description: e.target.value,
            } as State)}
          />
          <input
            className='w-100 pa3 mv2'
            value={this.state.imageUrl}
            placeholder='Image Url'
            onChange={(e: any) => this.setState({
              imageUrl: e.target.value,
            } as State)}
          />
          {this.state.imageUrl &&
            <img src={this.state.imageUrl} role='presentation' className='w-100 mv3' />
          }
          {this.state.description && this.state.imageUrl &&
            <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={this.handlePost}>Post</button>
          }
        </div>
      </div>
    )
  }

  handlePost = () => {
    const {description, imageUrl} = this.state
    this.props.mutate({variables: {description, imageUrl}})
      .then(() => {
        this.props.router.replace('/')
      })
  }
}

const addMutation = gql`
  mutation ($description: String!, $imageUrl: String!){
    createPost(description: $description, imageUrl: $imageUrl) {
      id
    }
  }
`

const PageWithMutation = graphql(addMutation)(withRouter(CreatePage))

export default PageWithMutation
