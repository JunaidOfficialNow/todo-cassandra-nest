import { Injectable } from '@nestjs/common';
import { Client, mapping } from 'cassandra-driver';

@Injectable()
export class Cassandra {
  private readonly client: Client;
  private readonly mapper: mapping.Mapper;

  constructor() {
    this.client = new Client({
      contactPoints: ['127.0.0.1'], // Replace with your Cassandra host
      localDataCenter: 'datacenter1', // Replace with your data center name
      keyspace: 'your_keyspace', // Replace with your keyspace name
    });
    this.mapper = new mapping.Mapper(this.client, {
      models: { Todo: { tables: ['todos'] } },
    });
  }

  async connect(): Promise<void> {
    await this.client.connect();
  }

  getClient(): Client {
    return this.client;
  }

  getMapper(): mapping.Mapper {
    return this.mapper;
  }
}
