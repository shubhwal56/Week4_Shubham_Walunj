import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../postgresDB/pgConfig';

interface PaymentAttributes {
    id?: string;
    invoiceId: string;
    amount: number;
    paymentDate: Date;
    paymentMode: string;
    referenceNo: string;
}

class Payment extends Model<PaymentAttributes> implements PaymentAttributes {
    public id!: string;
    public invoiceId!: string;
    public amount!: number;
    public paymentDate!: Date;
    public paymentMode!: string;
    public referenceNo!: string;
}

Payment.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        invoiceId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        paymentDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        paymentMode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        referenceNo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'payments',
        timestamps: false,
    }
);

export { Payment };
