import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('Reviews')
export class Review {

      @PrimaryGeneratedColumn()
      id: number

      @Column( 'varchar', {length:100})
      title: string

      @Column('varchar',{length:100})
      comment: string

      @Column('double')
      rating: number

}
