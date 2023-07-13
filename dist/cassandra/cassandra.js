"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cassandra = void 0;
const common_1 = require("@nestjs/common");
const cassandra_driver_1 = require("cassandra-driver");
let Cassandra = class Cassandra {
    constructor() {
        this.client = new cassandra_driver_1.Client({
            contactPoints: ['127.0.0.1'],
            localDataCenter: 'datacenter1',
            keyspace: 'your_keyspace',
        });
        this.mapper = new cassandra_driver_1.mapping.Mapper(this.client, {
            models: { Todo: { tables: ['todos'] } },
        });
    }
    async connect() {
        await this.client.connect();
    }
    getClient() {
        return this.client;
    }
    getMapper() {
        return this.mapper;
    }
};
Cassandra = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], Cassandra);
exports.Cassandra = Cassandra;
//# sourceMappingURL=cassandra.js.map