import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Delete,
  Param,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  // 获取课程列表
  @Get()
  getCourseList() {
    this.courseService.findAll();
  }

  // 创建课程
  @Post()
  createCourse(@Body() createCourseDto: CreateCourseDto) {
    this.courseService.create(createCourseDto);
  }

  // 获取单个课程
  @Get(':id')
  getCourseById(@Param('id') id: string) {
    return this.courseService.findOne(id);
  }

  // 更新某个课程
  @Patch(':id')
  updateCourse(
    @Param('id') id: number | string,
    @Body() updateCourse: UpdateCourseDto,
  ) {
    return this.courseService.update(id, updateCourse);
  }

  // 删除某个课程
  @Delete(':id')
  deleteCourseById(@Param('id') id: number | string) {
    return this.courseService.remove(id);
  }
}
