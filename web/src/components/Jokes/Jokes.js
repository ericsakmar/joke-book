import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/JokesCell'
import Joke from '../Joke/Joke'

const DELETE_JOKE_MUTATION = gql`
  mutation DeleteJokeMutation($id: Int!) {
    deleteJoke(id: $id) {
      id
    }
  }
`

const JokesList = ({ jokes }) => {
  const { addMessage } = useFlash()
  const [deleteJoke] = useMutation(DELETE_JOKE_MUTATION, {
    onCompleted: () => {
      addMessage('Joke deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  return (
    <div className="">
      <Link
        to={routes.newJoke()}
        className="block bg-green-300 rounded text-gray-900 text-center font-bold py-2 shadow-2xl mt-5"
      >
        Add a joke!
      </Link>

      {jokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </div>
  )
}

export default JokesList
