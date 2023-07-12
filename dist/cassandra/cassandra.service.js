"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CassandraService = void 0;
const common_1 = require("@nestjs/common");
const cassandra_driver_1 = require("cassandra-driver");
let CassandraService = class CassandraService {
    async onModuleInit() {
        this.client = new cassandra_driver_1.Client({
            contactPoints: ['localhost'],
            keyspace: 'your_keyspace',
            localDataCenter: 'datacenter1'
        });
        await this.client.connect();
    }
    getClient() {
        return this.client;
    }
};
CassandraService = __decorate([
    (0, common_1.Injectable)()
], CassandraService);
exports.CassandraService = CassandraService;
//# sourceMappingURL=cassandra.service.js.map