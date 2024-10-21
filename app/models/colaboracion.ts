import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cancion from '#models/cancion'
import Artista from '#models/artista'

export default class Colaboracion extends BaseModel {
  @column({ isPrimary: true })
  public id: number = 0

  @belongsTo(() => Cancion)
  declare cancion: BelongsTo<typeof Cancion>

  @belongsTo(() => Artista)
  declare artista: BelongsTo<typeof Artista>
}
