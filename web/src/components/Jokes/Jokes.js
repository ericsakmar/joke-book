import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/JokesCell'

const DELETE_JOKE_MUTATION = gql`
  mutation DeleteJokeMutation($id: Int!) {
    deleteJoke(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

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

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete joke ' + id + '?')) {
      deleteJoke({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Set up</th>
            <th>Punch line</th>
            <th>Name</th>
            <th>Up votes</th>
            <th>Down votes</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke) => (
            <tr key={joke.id}>
              <td>{truncate(joke.id)}</td>
              <td>{timeTag(joke.createdAt)}</td>
              <td>{truncate(joke.setUp)}</td>
              <td>{truncate(joke.punchLine)}</td>
              <td>{truncate(joke.name)}</td>
              <td>{truncate(joke.upVotes)}</td>
              <td>{truncate(joke.downVotes)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.joke({ id: joke.id })}
                    title={'Show joke ' + joke.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editJoke({ id: joke.id })}
                    title={'Edit joke ' + joke.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete joke ' + joke.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(joke.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JokesList
