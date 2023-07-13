import { TodosService } from './todos.service';
export declare class TodosController {
    private todosService;
    constructor(todosService: TodosService);
    getTodos(): Promise<{
        todos: void;
    }>;
    addTodo(): Promise<{
        success: boolean;
    }>;
    deleteTodo(): Promise<{
        success: boolean;
    }>;
}
