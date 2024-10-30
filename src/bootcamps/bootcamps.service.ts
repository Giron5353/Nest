import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';

@Injectable()
export class BootcampsService {

  //injectar: obtener una instancia del repositorio
  //como atributo la clse BootcampsService
  constructor(@InjectRepository(Bootcamp) private bootcampRepositor:Repository<Bootcamp>){

  }

  create(payload: CreateBootcampDto) {
    //crear una instancia de una entity bootcamp
    const newBootcamp = this.bootcampRepositor.create(payload)

    //grabar esa instancia y retornarla 
    return this.bootcampRepositor.save(newBootcamp);

  }

  findAll() {
    return this.bootcampRepositor.find();
  }

  findOne(id: number) {
    return this.bootcampRepositor.findOneBy({id});
  }

  update(id: number, payload: any) {
    // const updateBootcamps
    return this.bootcampRepositor.update(id,payload)
  }

  remove(id: number) {
    return this.bootcampRepositor.delete({id});
  }
}
