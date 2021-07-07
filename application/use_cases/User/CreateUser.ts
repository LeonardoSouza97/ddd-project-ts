import User from "../../../domain/User/User";
import IUserRepository from "../../../domain/User/IUserRepository";

class CreateUser {
  private readonly userRepository: IUserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(user: User){
    await this.userRepository.persist(user);
  }

}

export default CreateUser;