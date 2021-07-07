export default class User {
  private id : BigInteger;
  private name : String;
  private email : String;
  private dtBirthday : Date;

  constructor(id = null, name: String, email: String, dtBirthday : Date){
    this.id = id,
    this.name = name,
    this.email = email,
    this.dtBirthday = dtBirthday
  }

}