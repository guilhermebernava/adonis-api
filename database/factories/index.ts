import Factory from '@ioc:Adonis/Lucid/Factory'
import Profile from 'App/Models/Profile'

//serve para criar dados de forma automatica, utilizando a
//faker API
export const ProfileFactory = Factory.define(Profile, ({faker}) => {
  return {
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber()
  }
}).build()
