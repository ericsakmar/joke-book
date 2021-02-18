import { Flash } from '@redwoodjs/web'

const JokesLayout = (props) => {
  return (
    <div className="max-w-sm mx-auto my-5 ">
      <Flash timeout={1000} />

      <header className="">
        <h1 className="text-5xl text-center">joke wall</h1>

        <p className="opacity-80 text-lg text-center">
          Add some jokes and vote on your favorites!
        </p>
      </header>

      <main className="">{props.children}</main>
    </div>
  )
}

export default JokesLayout
