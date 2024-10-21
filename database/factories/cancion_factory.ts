import factory from '@adonisjs/lucid/factories'
import Cancion from '#models/cancion'

export const CancionFactory = factory
  .define(Cancion, async ({ faker }) => {
    return {
      titulo: faker.lorem.words(2).join(' '),
    artista_id: faker.datatype.number({ min: 1, max: 10 }), 
    album_id: faker.datatype.number({ min: 1, max: 10 }), 
    genero_id: faker.datatype.number({ min: 1, max: 10 }),
    fecha_lanzamiento: faker.date.past(1).toISOString().split('T')[0],
    duracion: faker.datatype.float({ min: 2, max: 5, precision: 0.1 }),
    }
  })
  .build()