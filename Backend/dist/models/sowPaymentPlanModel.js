"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentPlan = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = require("../postgresDB/pgConfig");
class PaymentPlan extends sequelize_1.Model {
}
exports.PaymentPlan = PaymentPlan;
PaymentPlan.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    customerId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    plannedInvoiceDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    totalActualAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.sequelize,
    tableName: 'payment_plans',
    timestamps: false,
});
//# sourceMappingURL=sowPaymentPlanModel.js.map