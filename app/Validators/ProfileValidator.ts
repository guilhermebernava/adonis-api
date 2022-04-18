import { schema , rules} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfileValidator {
  constructor(protected ctx: HttpContextContract) {}

  //definindo REGRAS para criacao de algo dentro do adonis
  public schema = schema.create({
    name: schema.string({}),
    phone: schema.string({}, [rules.regex(RegExp('/([0-9]{2} [0-9]{5}-[0-9]{4})/'))])
  })

  public messages = {}
}
