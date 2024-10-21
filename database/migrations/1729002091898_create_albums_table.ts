import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'albums'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titulo').notNullable()
      table.date('fecha_lanzamiento')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}