import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { CassandraModule } from './cassandra/cassandra.module';
import { Cassandra } from './cassandra/cassandra';


@Module({
  imports: [TodosModule, CassandraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private cassandra: Cassandra) {}
  async onModuleInit() {
    await this.cassandra.connect();
    console.log('connected to cassandra');
  }

}
