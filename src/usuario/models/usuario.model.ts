import { IsString, IsEmail } from 'class-validator';

export class Usuario {

    public _id: string = '';

    @IsString()
    public nome: string = '';

    @IsEmail()
    public email: string = '';

}
