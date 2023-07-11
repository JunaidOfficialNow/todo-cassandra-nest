import { Controller, Delete, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}
  @Get('/')
  async getTodos() {
    return { success: true };
  }

  @Post('/')
  async addTodo() {
    return { success: true };
  }

  @Delete('/:id')
  async deleteTodo() {
    return { success: true };
  }
}
