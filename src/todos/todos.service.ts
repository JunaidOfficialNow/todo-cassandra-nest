import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(private todoRepository: TodoRepository) {}

  async getTodos() {
    // return this.todoRepository.getTodos();
  }
}
