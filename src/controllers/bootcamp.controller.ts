import { Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('bootcamp')
export class BootcampController {

      @Get()
      getAllBootcamps(): string {
            return "aqui se mostraran todos los bootcamps"
      }

      @Get(':id')
      getBootcampById(@Param('id') id: string): string {
            return `aqui se mostrara el bootcamp por id ${id}`
      }

      @Post()
      createBootcamp(): string {
            return "aqui se creara un bootcamp"
      }

      @Put(':id')
      updateBootcamp(@Param('id') id: string): string {
            return `aqui se actualizara el bootcamp por id ${id}`
      }
      
      @Delete(':id')
      deleteBootcamp(@Param('id') id: string): string {
            return `aqui se eliminara el bootcamp por id ${id}`
      }

}
