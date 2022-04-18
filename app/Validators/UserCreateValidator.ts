import { schema , rules} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserCreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  //definindo REGRAS para criacao de algo dentro do adonis
  public schema = schema.create({
    email: schema.string({}, [rules.email()]),
    password: schema.string({}, [rules.regex(new RegExp('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/'))])
  })

  public messages = {}
}
