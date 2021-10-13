export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    key: number
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    avatar: string,
    key: number
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.avatar = avatar;
    this.key = key;
  }
}
