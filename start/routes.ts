/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

//CRUD de PROFILES
Route.post('/profile', 'ProfilesController.post')

Route.get('/profile' , 'ProfilesController.getAll')

Route.put('/profile', 'ProfilesController.update')

Route.delete('/profile' , 'ProfilesController.delete')

//CRUD de USERS
Route.post('/user', 'UsersController.post')

Route.get('/user' , 'UsersController.getAll')

Route.put('/user', 'UsersController.update')

Route.delete('/user' , 'UsersController.delete')

Route.put('/user/recoverPassword', 'UsersController.updatePassoword')
