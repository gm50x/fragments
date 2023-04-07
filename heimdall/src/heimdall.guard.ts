import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';

@Injectable()
export class HeimdallGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const { query } = context.switchToHttp().getRequest();

    if (query.unauthorized === 'error') {
      throw new UnauthorizedException('');
    }

    return !(query.unauthorized || query.forbidden);
  }
}

export const UseHeimdal = () => UseGuards(HeimdallGuard);
