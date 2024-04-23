import { UserDto } from '../common/user.dto';
import { OmitType } from '@nestjs/swagger';

export class UserRequestDto extends OmitType(UserDto, ['userId']) {}
