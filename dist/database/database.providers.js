"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect(process.env.DB),
    },
];
//# sourceMappingURL=database.providers.js.map