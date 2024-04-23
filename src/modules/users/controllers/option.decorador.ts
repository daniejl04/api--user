import { SetMetadata } from '@nestjs/common';


export const Options = (...options: string[]) => SetMetadata('options', options);