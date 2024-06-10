"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = require("../postgresDB/pgConfig");
class Organization extends sequelize_1.Model {
}
exports.Organization = Organization;
Organization.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    gstNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    panNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    legalOrganizationName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    invoiceTemplateId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    contactName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    addressId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.sequelize,
    tableName: 'organizations',
    timestamps: false,
});
//# sourceMappingURL=organizationModel.js.map