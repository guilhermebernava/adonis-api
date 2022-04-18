import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BadRequestException from 'App/Exceptions/BadRequestException'
import model from 'App/Models/Profile'
import ProfileValidator from 'App/Validators/ProfileValidator'

export default class ProfilesController {

    //metodo de criar um profile
    public async post({request ,response} : HttpContextContract){
        //vai validar os dados que virem de dentro da request
        const profilePayload = await request.validate(ProfileValidator)
        //vai criar o PROFILE dentro do banco de dados
        const profile = await model.create(profilePayload)
        //responde 201 depois de criar com o dado criado
        return response.created({profile})
    }

    public async getAll({response}){
        //pega todos os dados no banco
        const profiles = await model.all()

        return response.ok({profiles})
    }

    public async update ({request,response}){
        const profilePaylod = request.only(['name','phone','id'])
        //procura pelo ID o usuario no banco
        const profile = await model.findOrFail(profilePaylod.id)

        if(!profile){
          //chamando o EXPECTION
          throw new BadRequestException("User does not exist", 404)
        }
        //atualiza os dados
        profile.name = profilePaylod.name
        profile.phone = profilePaylod.phone
        //salva o usuario no banco
        profile.save()

        return response.ok({profile})
    }

    public async delete ({request, response}){
        const profilePayload = request.only(['id'])
        const profile = await model.findOrFail(profilePayload.id)
        //apaga esse profile do banco
        await profile.delete()

        return response.ok({profile})

    }
}
