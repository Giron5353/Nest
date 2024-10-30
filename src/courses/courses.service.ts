import { Injectable } from '@nestjs/common';

import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoursesService {
  constructor(@InjectRepository(Course) private CourseRepositor:Repository<Course>){

  }

  create(payload: any) {
    //crear una instancia de una entity bootcamp
    const newCourse = this.CourseRepositor.create(payload)

    //grabar esa instancia y retornarla 
    return this.CourseRepositor.save(newCourse);

  }

  findAll() {
    return this.CourseRepositor.find();
  }

  findOne(id: number) {
    return this.CourseRepositor.findOneBy({id});
  }

  update(id: number, payload: any) {
    return this.CourseRepositor.update(id,payload);
  }

  remove(id: number) {
    return this.CourseRepositor.delete({id});
  }
}
