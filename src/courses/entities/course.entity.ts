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

      @Column('double')
      tuition: number

      @Column('varchar',{length:30})
      minimunSkill : minimunSkill

      @Column('date')
      createAt: Date
}

enum minimunSkill{
      'Beginner',
      'Intermediate',
      'Avance'      
}