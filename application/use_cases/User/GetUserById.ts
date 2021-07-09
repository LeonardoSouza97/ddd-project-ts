import User from "../../../domain/User/User";
import IUserRepository from "../../../domain/User/IUserRepository";
import GenericUseCase from "../generic/GenericUseCase";

class GetUserById implements GenericUseCase<User> {
  private readonly userRepository: IUserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(user: User) {
    return this.userRepository.getById(user.id);
  }

}

export default GetUserById;