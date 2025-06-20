import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ApiOperation } from '@nestjs/swagger';
import { AddUserDto } from './dto/user.dto';

@Controller({
  path: 'user',
  // version: '1',
})
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @ApiOperation({ summary: '创建用户' })
  @Post('/add')
  create(@Body() user: AddUserDto) {
    return this.userService.createOrSave(user);
  }
}
