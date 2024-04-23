import { IsDate, IsNotEmpty } from '@nestjs/class-validator';
import { Type } from '@nestjs/class-transformer';
import { UserDto } from '../common/user.dto';

export class UserResponseDto extends UserDto {
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  updatedAt: Date;
}
