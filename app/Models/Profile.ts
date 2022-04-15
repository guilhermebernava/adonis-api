import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Profile extends BaseModel {
  //e uma coluna que vai ser criada com essa informacao
  //voce pode passar para esse column algumas informacoes
  //como por exemplo se é PRIMARY KEY
  @column({ isPrimary: true })
  public id: number

  //toda column tem que ter o DECORATOR e o nome da coluna
  // e depois seu tipo.
  @column()
  public name: string

  @column()
  public phone: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
