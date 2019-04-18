import { DefaultCrudRepository } from '@loopback/repository';
import { User } from '../models';
import { MysqlDataSource } from '../datasources';
import { inject } from '@loopback/core';

export type Credentials = {
  phone: string,
  password: string
}

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
  > {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(User, dataSource);
  }
}
