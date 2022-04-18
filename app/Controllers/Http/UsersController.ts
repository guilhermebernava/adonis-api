import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Hash from "@ioc:Adonis/Core/Hash";
import model from "App/Models/User";
import Mail from "@ioc:Adonis/Addons/Mail";

export default class UsersController {
  public async post({ request, response }: HttpContextContract) {
    const userPayload = request.only(["email", "password"]);

    const user = model.create(userPayload);
    return response.created({ response: "sucess", user });
  }

  public async update({ request, response }: HttpContextContract) {
    const userPayload = request.only([
      "email",
      "password",
      "id",
      "oldPassword",
    ]);
    const existUser = await model.findOrFail(userPayload.id);

    const correctPassword = await Hash.verify(
      existUser.password,
      userPayload.oldPassword
    );

    if (correctPassword) {
      existUser.email = userPayload.email;
      existUser.password = userPayload.password;
      return response.ok({ response: "sucess", existUser });
    }

    return response.notAcceptable("Incorrect Password!!!");
  }

  public async updatePassoword({ request, response }: HttpContextContract) {
    const userPayload = request.only(["email"]);
    const existUser = await model.findOrFail(userPayload.email);

    if (!existUser) {
      return response.notFound("NOT FOUND");
    }

    await Mail.send((message => {
      message.from('no-reply@teste.com')
      .to(userPayload.email)
      .subject("Recuperacao de senha")
      .text("clique no link abaixo para recuperar sua senha")
    }))
  }
}
