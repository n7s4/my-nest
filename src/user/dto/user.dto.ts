import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class AddUserDto {
  @ApiProperty({ example: 123 })
  id?: string;

  @ApiProperty({ example: 'like' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '1464521427@qq.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'n7s4' })
  @IsNotEmpty()
  username: string;
}
