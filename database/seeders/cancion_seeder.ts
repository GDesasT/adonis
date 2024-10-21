import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { CancionFactory } from '#database/factories/cancion_factory'
import { ArtistaFactory } from '#database/factories/artista_factory'
import { AlbumFactory } from '#database/factories/album_factory'
import { GeneroFactory } from '#database/factories/genero_factory'

export default class CancionSeeder extends BaseSeeder {
  public async run () {
    // Crea artistas
    const artistas = await ArtistaFactory.createMany(10)

    // Crea álbumes
    const albums = await AlbumFactory.createMany(10)

    // Crea géneros
    const generos = await GeneroFactory.createMany(10)

    // Crea canciones usando los IDs de artistas, álbumes y géneros
    await CancionFactory.createMany(50, {
      artista_id: () => artistas[Math.floor(Math.random() * artistas.length)].id,
      album_id: () => albums[Math.floor(Math.random() * albums.length)].id,
      genero_id: () => generos[Math.floor(Math.random() * generos.length)].id,
    })
  }
}