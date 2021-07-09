import User from "./User";

export interface IUserController {
  router(): any;
  create(request: any, response: any): void;
  update(request: any, response: any): void;
  delete(request: any, response: any): void;
  getById(request: any, response: any): Promise<User>;
  getByEmail(request: any, response: any): Promise<User>;
}
