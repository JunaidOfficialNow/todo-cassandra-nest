import { Client, mapping } from 'cassandra-driver';
export declare class Cassandra {
    private readonly client;
    private readonly mapper;
    constructor();
    connect(): Promise<void>;
    getClient(): Client;
    getMapper(): mapping.Mapper;
}
