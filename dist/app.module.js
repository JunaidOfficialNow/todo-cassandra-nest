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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const todos_module_1 = require("./todos/todos.module");
const cassandra_module_1 = require("./cassandra/cassandra.module");
const cassandra_1 = require("./cassandra/cassandra");
let AppModule = class AppModule {
    constructor(cassandra) {
        this.cassandra = cassandra;
    }
    async onModuleInit() {
        await this.cassandra.connect();
        console.log('connected to cassandra');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [todos_module_1.TodosModule, cassandra_module_1.CassandraModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [cassandra_1.Cassandra])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map