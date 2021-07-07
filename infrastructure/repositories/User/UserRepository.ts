import IUserRepository from "../../../domain/User/IUserRepository";
import User from "../../../domain/User/User";

class UserRepository implements IUserRepository {
  private readonly userModel;

  constructor({ UserModel }) {
    this.userModel = UserModel;
  }

  persist = async (domainUser: User) => {
    await this.userModel.create(domainUser);
  }

  merge(domainUser: User) {
    throw new Error("Method not implemented.");
  }
  remove(userId: Number) {
    throw new Error("Method not implemented.");
  }
  get(userId: Number) {
    throw new Error("Method not implemented.");
  }
  getByEmail(userEmail: String) {
    throw new Error("Method not implemented.");
  }

}

export default UserRepository;