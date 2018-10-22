import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthorizationPayload } from './authorization-payload.interface';

@Injectable()
export class AuthorizationService {

    constructor(
        private readonly jwtService: JwtService,
    ){}

    async createToken(id, nome, email){
        const payload: AuthorizationPayload = { _id: id, nome: nome, email: email };
        const accessToken = this.jwtService.sign(payload);
        return {
            expirerIn: 3600,
            accessToken
        }
    }

    async validateUser(payload: AuthorizationPayload): Promise<any> {
        // implementar na palestra a validação do usuário
        return {}
    }

}
