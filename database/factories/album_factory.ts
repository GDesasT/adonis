import factory from '@adonisjs/lucid/factories'
import Album from '#models/album'

export const AlbumFactory = factory
  .define(Album, async ({ faker }) => {
    return {}
  })
  .build()