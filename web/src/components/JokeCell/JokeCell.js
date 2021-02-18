import Joke from 'src/components/Joke'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Joke not found</div>

export const Success = ({ joke }) => {
  return <Joke joke={joke} />
}
