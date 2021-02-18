export const schema = gql`
  type Joke {
    id: Int!
    createdAt: DateTime!
    setUp: String!
    punchLine: String!
    name: String!
    upVotes: Int!
    downVotes: Int!
  }

  type Query {
    jokes: [Joke!]!
    joke(id: Int!): Joke
  }

  input CreateJokeInput {
    setUp: String!
    punchLine: String!
    name: String!
    upVotes: Int!
    downVotes: Int!
  }

  input UpdateJokeInput {
    setUp: String
    punchLine: String
    name: String
    upVotes: Int
    downVotes: Int
  }

  type Mutation {
    createJoke(input: CreateJokeInput!): Joke!
    updateJoke(id: Int!, input: UpdateJokeInput!): Joke!
    deleteJoke(id: Int!): Joke!
  }
`
