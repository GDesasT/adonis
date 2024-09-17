/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import TablesController from '#controllers/tables_controller'

router.get('/tables/:value1/:value2?/:fibonacci?', [TablesController, 'index'])
