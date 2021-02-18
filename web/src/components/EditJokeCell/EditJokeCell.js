import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import JokeForm from 'src/components/JokeForm'

export const QUERY = gql`
  query FIND_JOKE_BY_ID($id: Int!) {
    joke: joke(id: $id) {
      id
      createdAt
      setUp
      punchLine
      name
      upVotes
      downVotes
    }
  }
`
const UPDATE_JOKE_MUTATION = gql`
  mutation UpdateJokeMutation($id: Int!, $input: UpdateJokeInput!) {
    updateJoke(id: $id, input: $input) {
      id
      createdAt
      setUp
      punchLine
      name
      upVotes
      downVotes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ joke }) => {
  const { addMessage } = useFlash()
  const [updateJoke, { loading, error }] = useMutation(UPDATE_JOKE_MUTATION, {
    onCompleted: () => {
      navigate(routes.jokes())
      addMessage('Joke updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateJoke({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Joke {joke.id}</h2>
      </header>
      <div className="rw-segment-main">
        <JokeForm joke={joke} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
