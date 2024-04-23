import { IsNumber, IsOptional, IsString } from '@nestjs/class-validator';
import { UserRequestDto } from './user.request.dto';

export class PaginatedUserRequestDto extends UserRequestDto {
  @IsNumber()
  @IsOptional()
  docsPerPage?: number;

  @IsNumber()
  @IsOptional()
  offset?: number;

  @IsString()
  @IsOptional()
  sortBy?: string;
}
