import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const JokesLayout = (props) => {
  return (
    <div className="max-w-sm mx-auto my-5 ">
      <Flash timeout={1000} />

      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.jokes()} className="rw-link">
            Jokes
          </Link>
        </h1>

        <Link to={routes.newJoke()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Joke
        </Link>
      </header>

      <main className="">{props.children}</main>
    </div>
  )
}

export default JokesLayout
