import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Instrumento extends BaseModel {
  @column({ isPrimary: true })
  public id: number = 0

  @column()
  public nombre: string = ''

  @column()
  public tipo: string = ''
}
