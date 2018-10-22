import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UsuarioService } from './services/usuario.service';
import { UsuarioSchema } from './schemas/usuario.schema'
import { UsuarioController } from './controllers/usuario.controller';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        MongooseModule.forFeature([{ name: 'Usuario', schema: UsuarioSchema }])
    ],
    controllers: [UsuarioController],
    providers: [UsuarioService],
    exports: [UsuarioService]
})
export class UsuarioModule {
    
}
