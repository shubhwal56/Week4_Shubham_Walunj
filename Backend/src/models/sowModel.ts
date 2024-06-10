import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig';
import { Organization } from './organizationModel';
import { Customer } from './customerModel';
import { PaymentPlan } from './sowPaymentPlanModel';

interface SOWAttributes {
    id: string;
    invoiceEmailAddresses: string[];
    customerId: string;
    customerPONumber: string;
    title: string;
    customerSONumber: string;
    validityPeriod: {
        validFrom: string;
        validUpto: string;
    };
    totalValue: number;
    currency: string;
}

class SOW extends Model<SOWAttributes> implements SOWAttributes {
    public id!: string;
    public invoiceEmailAddresses!: string[];
    public customerId!: string;
    public customerPONumber!: string;
    public title!: string;
    public customerSONumber!: string;
    public validityPeriod!: { validFrom: string; validUpto: string; };
    public totalValue!: number;
    public currency!: string;
}

SOW.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        invoiceEmailAddresses: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        customerId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customerPONumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customerSONumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        validityPeriod: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        totalValue: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'sows',
        timestamps: false,
    }
);


export { SOW };
