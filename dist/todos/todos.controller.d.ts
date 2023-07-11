import { TodosService } from './todos.service';
export declare class TodosController {
    private todosService;
    constructor(todosService: TodosService);
    getTodos(): Promise<{
        success: boolean;
    }>;
}
