import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

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

const Joke = ({ joke }) => {
  const [updateJoke] = useMutation(UPDATE_JOKE_MUTATION, {
    onCompleted: () => {
      // navigate(routes.jokes())
      // addMessage('Joke deleted.', { classes: 'rw-flash-success' })
    },
  })

  const handleUpVote = () => {
    const next = { upVotes: joke.upVotes + 1 }
    updateJoke({ variables: { id: joke.id, input: next } })
  }

  const handleDownVote = () => {
    const next = { downVotes: joke.downVotes + 1 }
    updateJoke({ variables: { id: joke.id, input: next } })
  }

  const showAdmin = true

  return (
    <>
      <div className="max-w-sm">
        <div className="text-xl">{joke.setUp}</div>
        <div className="text-xl text-right italic">{joke.punchLine}</div>

        <div>{joke.name}</div>

        <div className="actions text-center">
          <button className="mr-5" onClick={handleUpVote}>
            <svg
              className="w-10 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
            ({joke.upVotes})
          </button>

          <button className="mr-5" onClick={handleDownVote}>
            <svg
              className="w-10 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
              />
            </svg>
            ({joke.downVotes})
          </button>

          {showAdmin && (
            <Link to={routes.editJoke({ id: joke.id })} className="">
              Edit
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Joke
