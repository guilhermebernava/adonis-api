import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from "@ioc:Adonis/Core/Hash"


export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  //nn vai mandar esse dado na RESPONSE dos CONTROLLERS
  @column({serializeAs: null})
  public password: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  //toda vez antes de salvar o dado no banco ele vai rodar esse metodo
  @beforeSave()
  public static async hashPassword(user: User){
    //vai verificar se a senha ainda nn foi transformada em HASH
    //e vai transformar ela em HASH
    if(user.$dirty.password){
      user.password = await Hash.make(user.password)
    }
  }

}
