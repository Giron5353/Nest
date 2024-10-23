import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';

@Injectable()
export class BootcampsService {

  //injectar: obtener una instancia del repositorio
  //como atributo la clse BootcampsService
  constructor(@InjectRepository(Bootcamp) private bootcampRepositor:Repository<Bootcamp>){

  }

  create(createBootcampDto: CreateBootcampDto) {
    return this.bootcampRepositor.createQueryBuilder();
  }

  findAll() {
    return this.bootcampRepositor.find();
  }

  findOne(id: number) {
    return this.bootcampRepositor.findOneBy({id});
  }

  update(id: number, updateBootcampDto: UpdateBootcampDto) {
    return this.bootcampRepositor.save({id})
  }

  remove(id: number) {
    return this.bootcampRepositor.delete({id});
  }
}
