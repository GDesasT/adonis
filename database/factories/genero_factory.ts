import factory from '@adonisjs/lucid/factories'
import Genero from '#models/genero'

export const GeneroFactory = factory
  .define(Genero, async ({ faker }) => {
    return {
      nombre: faker.music.genre(),
    }
  })
  .build()