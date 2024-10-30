import { Injectable } from '@nestjs/common';

import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(Review) private ReviewRepositor:Repository<Review>){

  }

  create(payload: any) {
    //crear una instancia de una entity bootcamp
    const newCourse = this.ReviewRepositor.create(payload)

    //grabar esa instancia y retornarla 
    return this.ReviewRepositor.save(newCourse);

  }

  findAll() {
    return this.ReviewRepositor.find();
  }

  findOne(id: number) {
    return this.ReviewRepositor.findOneBy({id});
  }

  update(id: number, payload: any) {
    return this.ReviewRepositor.update(+id,payload)
  }

  remove(id: number) {
    return this.ReviewRepositor.delete({id});
  }
}
