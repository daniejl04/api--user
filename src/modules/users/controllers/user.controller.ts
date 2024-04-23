// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put, Query, HttpCode, HttpStatus,} from '@nestjs/common';
import { AbstractCrudHandle, ValidationContext } from '../services/user.service';
import { UserDto } from '../dto/common/user.dto';
import { PaginatedUserRequestDto } from '../dto/requests/pag.req.dto';
import { UserResponseDto } from '../dto/responses/user.res.dto';

@Controller('users')
export class UsersController{
  constructor(private readonly usersService: AbstractCrudHandler) {}

  @Post()
  async create(@Body() userDto: UserDto) {
    return await this.usersService.create(userDto);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get('paginated')
  @HttpCode(HttpStatus.OK)
  async findPaginated(
    @Query() query: PaginatedUserRequestDto,
  ): Promise<UserResponseDto[]> {
    const bookList = await this.usersService.findPaginated(
      query,
      { createdAt: -1 },
      query.docsPerPage,
      query.offset,
    );
    return bookList;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() userDto: UserDto) {
    return await this.usersService.update(id, userDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }
}
