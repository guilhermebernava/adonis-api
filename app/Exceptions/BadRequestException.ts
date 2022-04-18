import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BadRequestException extends Exception {
  public code = 'BAD_REQUEST'

  //criando a resposta padrao para o RESPONSE do error
  public async handle(error: this, ctx: HttpContextContract){
    return ctx.response.status(error.status).send({code:error.code, message: error.message, status: error.status})
  }
}
