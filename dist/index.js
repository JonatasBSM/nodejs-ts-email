"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router_1 = __importDefault(require("./Routes/Router"));
const app = (0, express_1.default)();
const port = 3000;
app.use(Router_1.default);
app.listen(port, () => {
    console.log('App ontheline!');
});
//# sourceMappingURL=index.js.map