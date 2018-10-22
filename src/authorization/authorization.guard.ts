import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AuthorizationGuard implements CanActivate {

    canActivate(context: ExecutionContext): boolean {
        // implementar autenticação durante a palestra
        return true;
    }

    handleRequest(err, user, info){
        if(err || !user){
            throw err || new UnauthorizedException()
        }
        return user;
    }

}