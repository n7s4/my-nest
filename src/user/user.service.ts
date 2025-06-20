import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.mongo.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: MongoRepository<User>,
  ) {}

  createOrSave(user) {
    return this.userRepository.save(user);
  }
}
