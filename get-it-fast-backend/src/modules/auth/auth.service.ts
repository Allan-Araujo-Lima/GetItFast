import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ProfilesDataService } from '../profiles_data/profiles_data.service';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private profiles_dataService: ProfilesDataService,
    private jwtService: JwtService,
  ) { }

  async signIn(email: string, password: string): Promise<any> {
    const profile_data =
      await this.profiles_dataService.findOneWithEmail(email);

    if (!profile_data) throw new NotFoundException('ProfileData not found.');

    const isEqual = await bcrypt.compare(password, profile_data?.password);

    if (!isEqual) {
      throw new BadRequestException('wrong password or email');
    }

    const payload = {
      sub: profile_data.id,
      email: profile_data.email,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  getProfile(req: any): {
    sub: string;
    email: string;
    iat: number;
    exp: number;
  } {
    return req.profile_data;
  }
}
