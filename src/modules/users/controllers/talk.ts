import { Injectable } from '@nestjs/common';
import { Options } from './option.decorador';

@Injectable()
export class MyService {
  @Options('option1', 'option2')
  async myMethod() {
    // Tu lógica aquí
  }
}

