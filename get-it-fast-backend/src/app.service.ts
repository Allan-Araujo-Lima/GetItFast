import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createUser() {
    return 'Hello World!';
  }
}
