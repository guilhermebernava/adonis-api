/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor () {
    super(Logger)
  }

  //handler GENERICO que vai tratar qualquer EXCEPTION da API
  public async handle(error: Exception, ctx: HttpContextContract){

    //ira validar se o erro for 422 e vai devolver a resposta
    //formatada do jeito padrao que foi definido
    if(error.status === 422){
        return ctx.response.status(error.status).send({
          code:'BAD_REQUEST',
          message: error.message,
          status: error.stack,
        })
    }

    return super.handle(error, ctx)
  }
}
