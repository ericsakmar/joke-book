import { db } from 'src/lib/db'

export const jokes = () => {
  return db.joke.findMany()
}

export const joke = ({ id }) => {
  return db.joke.findUnique({
    where: { id },
  })
}

export const createJoke = ({ input }) => {
  return db.joke.create({
    data: input,
  })
}

export const updateJoke = ({ id, input }) => {
  return db.joke.update({
    data: input,
    where: { id },
  })
}

export const deleteJoke = ({ id }) => {
  return db.joke.delete({
    where: { id },
  })
}
