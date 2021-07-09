export default class User {
  public id : Number;
  public name : String;
  public email : String;
  public dtBirthday : Date;

  constructor(id = null, name: String, email: String, dtBirthday : Date){
    this.id = id,
    this.name = name,
    this.email = email,
    this.dtBirthday = dtBirthday
  }

}