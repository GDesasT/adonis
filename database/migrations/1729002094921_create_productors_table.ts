import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'productors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.string('estudio').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}