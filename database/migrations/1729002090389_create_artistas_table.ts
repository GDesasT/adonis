import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'artistas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.date('fecha_nacimiento')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}