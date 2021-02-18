import { Link, routes } from '@redwoodjs/router'

import Jokes from 'src/components/Jokes'

export const QUERY = gql`
  query JOKES {
    jokes {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No jokes yet. '}
      <Link to={routes.newJoke()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ jokes }) => {
  return <Jokes jokes={jokes} />
}
