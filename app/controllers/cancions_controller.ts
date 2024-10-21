import type { HttpContext } from '@adonisjs/core/http'

export default class CancionsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    // Lógica para mostrar todas las canciones
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {
    // Lógica para mostrar el formulario de creación
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.only(['titulo', 'artista_id', 'album_id', 'genero_id', 'fecha_lanzamiento', 'duracion'])
    // Aquí puedes crear la canción en la base de datos
    return response.status(201).json(data) // Ejemplo de respuesta
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    // Lógica para mostrar una canción específica
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {
    // Lógica para mostrar el formulario de edición para una canción
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const data = request.only(['titulo', 'artista_id', 'album_id', 'genero_id', 'fecha_lanzamiento', 'duracion'])
    // Aquí puedes actualizar la canción en la base de datos usando params.id
    return response.status(200).json(data) // Ejemplo de respuesta
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    // Lógica para eliminar una canción
    return response.status(204).send(null)
  }
}
