import User from "../../../domain/User/User";
import IUserRepository from "../../../domain/User/IUserRepository";
import GenericUseCase from "../generic/GenericUseCase";

class GetUserByEmail implements GenericUseCase<User> {
  private readonly userRepository: IUserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(user: User) {
    return this.userRepository.getByEmail(user.email);
  }

}

export default GetUserByEmail;