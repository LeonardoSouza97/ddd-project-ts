import IUserRepository from "../../../domain/User/IUserRepository";
import User from "../../../domain/User/User";

class UserRepository implements IUserRepository {
  private readonly userModel;

  constructor({ UserModel }) {
    this.userModel = UserModel;
  }

  persist(domainUser: User) {
    return this.userModel.create(domainUser);
  }

  merge(domainUser: User) {
    return this.userModel.update(domainUser, { where: { id: domainUser.id } });
  }

  remove(userId: Number) {
    return this.userModel.destroy({ where: { id: userId } });
  }

  getById(userId: Number) {
    return this.userModel.findOne({ where: { id: userId } });
  }

  getByEmail(userEmail: String) {
    return this.userModel.findOne({ where: { email: userEmail } });
  }

}

export default UserRepository;