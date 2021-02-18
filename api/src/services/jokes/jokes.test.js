import { jokes, joke, createJoke, updateJoke, deleteJoke } from './jokes'

describe('jokes', () => {
  scenario('returns all jokes', async (scenario) => {
    const result = await jokes()

    expect(result.length).toEqual(Object.keys(scenario.joke).length)
  })

  scenario('returns a single joke', async (scenario) => {
    const result = await joke({ id: scenario.joke.one.id })

    expect(result).toEqual(scenario.joke.one)
  })

  scenario('creates a joke', async (scenario) => {
    const result = await createJoke({
      input: {
        setUp: 'String',
        punchLine: 'String',
        name: 'String',
        upVotes: 4422444,
        downVotes: 4906734,
      },
    })

    expect(result.setUp).toEqual('String')
    expect(result.punchLine).toEqual('String')
    expect(result.name).toEqual('String')
    expect(result.upVotes).toEqual(4422444)
    expect(result.downVotes).toEqual(4906734)
  })

  scenario('updates a joke', async (scenario) => {
    const original = await joke({ id: scenario.joke.one.id })
    const result = await updateJoke({
      id: original.id,
      input: { setUp: 'String2' },
    })

    expect(result.setUp).toEqual('String2')
  })

  scenario('deletes a joke', async (scenario) => {
    const original = await deleteJoke({ id: scenario.joke.one.id })
    const result = await joke({ id: original.id })

    expect(result).toEqual(null)
  })
})
