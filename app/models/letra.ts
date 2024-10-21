import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cancion from '#models/cancion'

export default class Letra extends BaseModel {
  @column({ isPrimary: true })
  public id: number = 0

  @column()
  public contenido: string = ''

  @belongsTo(() => Cancion)
  declare cancion: BelongsTo<typeof Cancion>
}
