"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const sowRoutes_1 = __importDefault(require("./routes/sowRoutes"));
const invoiceRoutes_1 = __importDefault(require("./routes/invoiceRoutes"));
const organizationRoutes_1 = __importDefault(require("./routes/organizationRoutes"));
const customerRoutes_1 = __importDefault(require("./routes/customerRoutes"));
const paymentPlanRoutes_1 = __importDefault(require("./routes/paymentPlanRoutes"));
const paymentPlanItemRoutes_1 = __importDefault(require("./routes/paymentPlanItemRoutes")); // Add this line
const pgConfig_1 = require("./postgresDB/pgConfig");
require("./postgresDB/association");
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use((0, cors_1.default)({
    origin: 'http://localhost:3001',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(body_parser_1.default.json());
app.use('/api/sows', sowRoutes_1.default);
app.use('/api/organizations', organizationRoutes_1.default);
app.use('/api/customers', customerRoutes_1.default);
app.use('/api/payment-plans', paymentPlanRoutes_1.default);
app.use('/api/payment-plan-item', paymentPlanItemRoutes_1.default);
app.use('/api/invoices', invoiceRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Invoice Management System API');
});
pgConfig_1.sequelize.authenticate().then(() => {
    console.log('Connected to the database.');
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map