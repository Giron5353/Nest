import { Injectable } from '@nestjs/common';

import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private UserRepositor:Repository<User>){

  }

  create(payload: any) {
    //crear una instancia de una entity bootcamp
    const newCourse = this.UserRepositor.create(payload)

    //grabar esa instancia y retornarla 
    return this.UserRepositor.save(newCourse);

  }

  findAll() {
    return this.UserRepositor.find();
  }

  findOne(id: number) {
    return this.UserRepositor.findOneBy({id});
  }

  update(id: number, payload: any) {
    return this.UserRepositor.update(id,payload);
  }

  remove(id: number) {
    return this.UserRepositor.delete({id});
  }
}
