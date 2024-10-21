import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'colaboracions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cancion_id').unsigned().references('id').inTable('canciones').onDelete('CASCADE')
      table.integer('artista_id').unsigned().references('id').inTable('artistas').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}