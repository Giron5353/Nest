import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateBootcampDto{
      @IsString()
      @IsNotEmpty()
      phone: string;

      @IsString()
      @IsNotEmpty()
      name: string;

      @IsString()
      @IsNotEmpty()
      addres: string;

      @IsString()
      @IsNotEmpty()
      topics: string;

      @IsNotEmpty()
      averageRating: number;

      @IsNotEmpty()
      createAt: Date;

}