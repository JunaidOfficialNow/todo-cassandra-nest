import { OnModuleInit } from '@nestjs/common';
import { Cassandra } from './cassandra/cassandra';
export declare class AppModule implements OnModuleInit {
    private cassandra;
    constructor(cassandra: Cassandra);
    onModuleInit(): Promise<void>;
}
