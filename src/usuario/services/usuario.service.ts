import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Usuario } from "../models/usuario.model";


@Injectable()
export class UsuarioService {

    constructor(@InjectModel('Usuario') private readonly usuarioModel: Model<Usuario>) {}

    async get(): Promise<Usuario[]> {
        return await this.usuarioModel.find().exec();
    }

    async create(model: Usuario): Promise<Usuario> {
        const usuario = new this.usuarioModel(model);
        return await usuario.save();
    }

    async findById(id: string): Promise<Usuario> {
        return await this.usuarioModel.findById(id);
    }

    async update(id: string, model: Usuario): Promise<Usuario> {
        return await this.usuarioModel.findByIdAndUpdate(id, model, {new: true});
    }

    async remove(id: string): Promise<any> {
        return await this.usuarioModel.findOneAndDelete(id)
    }

    async findByEmail(email: string): Promise<any> {
        return await this.usuarioModel.findOne({ email: email })
    }

}