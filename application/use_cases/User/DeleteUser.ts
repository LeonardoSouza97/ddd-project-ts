import User from "../../../domain/User/User";
import IUserRepository from "../../../domain/User/IUserRepository";
import GenericUseCase from "../generic/GenericUseCase";

class DeleteUser implements GenericUseCase<User> {
  private readonly userRepository: IUserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(user: User) {
    await this.userRepository.remove(user.id);
  }

}

export default DeleteUser;