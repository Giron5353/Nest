import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entities/Student.entity';
import { query } from 'express';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}


  //Endpint: puerta del software
  //acepta peticiones de cliente bajo una url semantica
  //retorna el(los) datos esperados al cliente
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //segundo endpoint - estructurar un endpoint
  // 1.verbo(metodo) http sobre el cual recibir
  // metodos disponibles: get, post, put, delete
  //junto con la ruta a invocar
  // 2.firma del metodo a ejecutar
  // cuando se invoque el endpoint
  @Get('/ficha')
  getFicha(): string {
    return "endpoint de la ficha 2902093"   //this.appService.getFicha();
  }

  //tercer endpoint
  @Get('/identificacion/:id/ciudad/:cuidad')
  Identificacion(@Param('id') id: string , @Param('cuidad') cuidad: string, @Query('nombre')nombre:string, @Query('edad') edad:number ): Student  {
    return new Student(+id, nombre, edad, cuidad);
  }

}
