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
    createJoke({ variables: { input: { ...input, upVotes: 0, downVotes: 0 } } })
  }

  return (
    <div className="my-5 bg-gray-900 bg-opacity-95 p-10 rounded shadow-2xl">
      <JokeForm onSave={onSave} loading={loading} error={error} />
    </div>
  )
}

export default NewJoke
