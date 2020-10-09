import bcrypt from 'bcryptjs';

export class Key {
  readonly secret: string;

  constructor(secret: string) {
    this.secret = bcrypt.hashSync(secret, 10);
  }
}
