import { OnModuleInit } from '@nestjs/common';
import { Client } from 'cassandra-driver';
export declare class CassandraService implements OnModuleInit {
    private client;
    onModuleInit(): Promise<void>;
    getClient(): Client;
}
