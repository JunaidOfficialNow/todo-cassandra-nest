import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client } from 'cassandra-driver';

@Injectable()
export class CassandraService implements OnModuleInit {
  private client: Client;

  async onModuleInit() {
    this.client = new Client({
      contactPoints: ['localhost'],
      keyspace: 'your_keyspace',
      localDataCenter: 'datacenter1',
    });
    await this.client.connect();
  }

  getClient(): Client {
    return this.client;
  }
}
