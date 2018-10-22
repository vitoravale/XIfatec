import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthorizationService } from "./authorization.service";
import { AuthorizationPayload } from "./authorization-payload.interface";

@Injectable()
export class AuthorizationStrategy extends PassportStrategy(Strategy){

    constructor(private readonly authService: AuthorizationService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'abacaxi'
        })
    }

    async validate(payload: AuthorizationPayload){
        const usuario = this.authService.validateUser(payload);
        if(!usuario){
            throw new UnauthorizedException();
        }
        return usuario;
    }

}