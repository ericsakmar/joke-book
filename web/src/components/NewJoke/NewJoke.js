import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import JokeForm from 'src/components/JokeForm'

import { QUERY } from 'src/components/JokesCell'

const CREATE_JOKE_MUTATION = gql`
  mutation CreateJokeMutation($input: CreateJokeInput!) {
    createJoke(input: $input) {
      id
    }
  }
`

const NewJoke = () => {
  const { addMessage } = useFlash()
  const [createJoke, { loading, error }] = useMutation(CREATE_JOKE_MUTATION, {
    onCompleted: () => {
      navigate(routes.jokes())
      addMessage('Joke created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createJoke({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Joke</h2>
      </header>
      <div className="rw-segment-main">
        <JokeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewJoke
