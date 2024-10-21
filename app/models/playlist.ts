import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Playlist extends BaseModel {
  @column({ isPrimary: true })
  public id: number = 0

  @column()
  public nombre: string = ''
}
