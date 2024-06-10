"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceLineItem = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = require("../postgresDB/pgConfig");
class InvoiceLineItem extends sequelize_1.Model {
}
exports.InvoiceLineItem = InvoiceLineItem;
InvoiceLineItem.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    invoiceId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sowPaymentPlanItemId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.sequelize,
    tableName: 'invoice_line_items',
    timestamps: false,
});
//# sourceMappingURL=invoiceLineItemModel.js.map