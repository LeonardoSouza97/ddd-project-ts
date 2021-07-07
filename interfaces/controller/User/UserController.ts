import { Router } from "express";
import Status from 'http-status';

export default class UserController {
  private readonly createUser;

  constructor({ createUser }) {
    this.createUser = createUser;
  }

  router() {
    const router = Router();

    router.post('/', this.create);

    return router;
  }

  create = async (request: any, response: any) => {
    const { body: user } = request;
    await this.createUser.execute(user);
    response.status(Status.OK).json(user);
  }
}