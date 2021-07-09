import { Router } from "express";
import Status from 'http-status';
import GenericUseCase from "../../../application/use_cases/generic/GenericUseCase";
import { IUserController } from "../../../domain/User/IUserController";
import User from "../../../domain/User/User";

class UserController implements IUserController {
  private readonly createUser: GenericUseCase<User>;
  private readonly mergeUser: GenericUseCase<User>;
  private readonly deleteUser: GenericUseCase<User>;
  private readonly getUserById: GenericUseCase<User>;
  private readonly getUserByEmail: GenericUseCase<User>;

  constructor({ createUser, mergeUser, deleteUser, getUserById, getUserByEmail }) {
    this.createUser = createUser;
    this.mergeUser = mergeUser;
    this.deleteUser = deleteUser;
    this.getUserById = getUserById;
    this.getUserByEmail = getUserByEmail;
  }

  router() {
    const router = Router();
    router.post('/', this.create);
    router.put('/', this.update);
    router.delete('/:id', this.delete);
    router.get('/:id', this.getById);
    router.get('/email/:email', this.getByEmail);
    return router;
  }

  create = async (request: any, response: any) => {
    const { body: user } = request;
    await this.createUser.execute(user);
    response.status(Status.OK).json(user);
  }

  update = async (request: any, response: any) => {
    const { body: user } = request;
    await this.mergeUser.execute(user);
    response.status(Status.OK).json(user);
  }

  delete = async (request: any, response: any) => {
    const { body: user } = request;
    await this.deleteUser.execute(user);
    response.status(Status.OK).json(user);
  }

  getById = async (request: any, response: any): Promise<User> => {
    const user = request.params;
    const result = await this.getUserById.execute(user);
    return response.status(Status.OK).json(result);
  }

  getByEmail = async (request: any, response: any): Promise<User> => {
    const user = request.params;
    const result = await this.getUserByEmail.execute(user);
    return response.status(Status.OK).json(result);
  }
}


export default UserController;