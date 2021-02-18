import JokesLayout from 'src/layouts/JokesLayout'
import JokeCell from 'src/components/JokeCell'

const JokePage = ({ id }) => {
  return (
    <JokesLayout>
      <JokeCell id={id} />
    </JokesLayout>
  )
}

export default JokePage
