import JokesLayout from 'src/layouts/JokesLayout'
import EditJokeCell from 'src/components/EditJokeCell'

const EditJokePage = ({ id }) => {
  return (
    <JokesLayout>
      <EditJokeCell id={id} />
    </JokesLayout>
  )
}

export default EditJokePage
