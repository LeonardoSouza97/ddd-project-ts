import User from "../../../domain/User/User";
import IUserRepository from "../../../domain/User/IUserRepository";
import GenericUseCase from "../generic/GenericUseCase";

class MergeUser implements GenericUseCase<User> {
  private readonly userRepository: IUserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(user: User){
    await this.userRepository.merge(user);
  }

}

export default MergeUser;