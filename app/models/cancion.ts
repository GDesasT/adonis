import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Artista from '#models/artista'
import Album from '#models/album'
import Genero from '#models/genero'

export default class Cancion extends BaseModel {
  @column({ isPrimary: true })
  public id: number = 0

  @column()
  public titulo: string = ''

  @belongsTo(() => Artista)
  declare artista: BelongsTo<typeof Artista>

  @belongsTo(() => Album)
  declare album: BelongsTo<typeof Album>

  @belongsTo(() => Genero)
  declare genero: BelongsTo<typeof Genero>
}