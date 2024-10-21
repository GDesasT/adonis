import factory from '@adonisjs/lucid/factories'
import Artista from '#models/artista'


export const ArtistaFactory = factory
  .define(Artista, async ({ faker }) => {
    return {
      nombre: faker.person.fullName(),
      fecha_nacimiento: faker.date.past({ years: 30 }).toISOString().split('T')[0],
    }
  })
  .build()