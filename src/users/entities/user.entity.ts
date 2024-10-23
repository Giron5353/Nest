import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('Users')
export class User {

      @PrimaryGeneratedColumn()
      id: number

      @Column('varchar',{length:50})
      name: string

      @Column('varchar',{length:100})
      email: string

      @Column('varchar',{length:50})
      role: string

      @Column('varchar',{length:100})
      password: string
}
