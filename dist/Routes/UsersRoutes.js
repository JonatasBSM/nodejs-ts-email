"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("../Controllers/UserController");
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
userRoutes.get('/users', UserController_1.index);
userRoutes.get('/users/create', UserController_1.create);
userRoutes.post('/users', UserController_1.store);
userRoutes.get('/users/:id', UserController_1.show);
userRoutes.get('/users/:id/edit', UserController_1.edit);
userRoutes.patch('/users/:id', UserController_1.update);
userRoutes.put('/users/:id', UserController_1.update);
userRoutes.delete('/users/:id', UserController_1.destroy);
exports.default = userRoutes;
//# sourceMappingURL=UsersRoutes.js.map