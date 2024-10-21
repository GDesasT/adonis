import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cancions'

  public async up () {
    this.schema.createTable('canciones', (table) => {
      table.increments('id')
      table.string('titulo').notNullable()
      table.integer('artista_id').unsigned().references('id').inTable('artistas').onDelete('CASCADE')
      table.integer('album_id').unsigned().references('id').inTable('albums').onDelete('CASCADE')
      table.integer('genero_id').unsigned().references('id').inTable('generos').onDelete('CASCADE')
      table.date('fecha_lanzamiento')
      table.float('duracion')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}