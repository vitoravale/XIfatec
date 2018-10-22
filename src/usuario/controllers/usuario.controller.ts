import { Controller, UseGuards, Get, Post, Body, Delete, Patch, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsuarioService } from 'usuario/services/usuario.service';
import { AuthGuard } from '@nestjs/passport';
import { Usuario } from 'usuario/models/usuario.model';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly service: UsuarioService){}

    @Get()
    // @UseGuards(AuthGuard())
    async findAll(): Promise<Usuario[]>{
        return this.service.get();
    }

    @Get(':id')
    // @UseGuards(AuthGuard())
    async findById(@Param('id') id): Promise<Usuario> {
        return this.service.findById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() usuario: Usuario): Promise<Usuario>{
        return this.service.create(usuario);
    }

    @Patch(':id')
    @UsePipes(ValidationPipe)
    // @UseGuards(AuthGuard())
    async update(@Param('id') id, @Body() usuario: Usuario): Promise<Usuario> {
        return this.service.update(id, usuario);
    }

    @Delete(':id')
    @UsePipes(ValidationPipe)
    // @UseGuards(AuthGuard())
    async delete(@Param('id') id): Promise<Usuario> {
        return this.service.remove(id);
    }

}