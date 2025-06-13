import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  create(createCourseDto: CreateCourseDto) {
    return `this action adds a new course`;
  }

  findAll() {
    return `This action return all course`;
  }

  findOne(id: number | string) {
    return `This action return a #${id} course`;
  }

  update(id: number | string, updateCourseDto: UpdateCourseDto) {
    return `This action update a #${id} course`;
  }

  remove(id: number | string) {
    return `This action remove a #${id} course`;
  }
}
