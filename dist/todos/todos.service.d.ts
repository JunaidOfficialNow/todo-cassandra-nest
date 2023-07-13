import { TodoRepository } from './todos.repository';
export declare class TodosService {
    private todoRepository;
    constructor(todoRepository: TodoRepository);
    getTodos(): Promise<void>;
}
