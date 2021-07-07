import User from "./User"

export default interface IUserRepository {

  persist(domainUser: User);
  merge(domainUser: User);
  remove(userId: Number);
  get(userId : Number);
  getByEmail(userEmail: String);

}