import { Query } from '@nestjs/common';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('Courses')
export class Course {

      @PrimaryGeneratedColumn()
      id: number

      @Column('varchar',{length:100})
      title: string

      @Column('varchar',{length:150})
      description: string

      @Column('double')
      weeks: number

      @Column ({type: "decimal",nullable:true})

      @Column('double')
      tuition: number

      @Column({name:'minimun_Skill',type:'enum', enum:["Beginner","Intermediate","Avance"]})
      minimunSkill : minimunSkill

      @Column('date')
      createAt: Date
}

enum minimunSkill{
      'Beginner',
      'Intermediate',
      'Avance'      
}