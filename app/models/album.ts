import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Album extends BaseModel {
  @column({ isPrimary: true })
  public id: number = 0

  @column()
  public titulo: string = ''

  @column()
  public fecha_lanzamiento: string = ''
}
