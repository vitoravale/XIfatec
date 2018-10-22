import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {AuthorizationService} from './authorization.service';
import {AuthorizationStrategy} from './authorization.strategy';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({secretOrPrivateKey: 'abacaxi', signOptions: {expiresIn: 3600}})
  ],
  providers: [AuthorizationService, AuthorizationStrategy],
  exports: [AuthorizationService, AuthorizationStrategy]
})
export class AuthorizationModule {
}
