import { Module } from '@nestjs/common';
import { Cassandra } from './cassandra';

@Module({
  providers: [Cassandra],
  exports: [Cassandra],
})
export class CassandraModule {}
