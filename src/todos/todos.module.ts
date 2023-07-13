import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodoRepository } from './todos.repository';
import { CassandraModule } from 'src/cassandra/cassandra.module';

@Module({
  imports: [CassandraModule],
  controllers: [TodosController],
  providers: [TodosService, TodoRepository],
})
export class TodosModule {}
