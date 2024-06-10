
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig';
import { Invoice } from './invoiceModel';

interface InvoiceLineItemAttributes {
    id: string;
    invoiceId: string;
    sowPaymentPlanItemId: string;
    description: string;
    amount: number;
}

class InvoiceLineItem extends Model<InvoiceLineItemAttributes> implements InvoiceLineItemAttributes {
    public id!: string;
    public invoiceId!: string;
    public sowPaymentPlanItemId!: string;
    public description!: string;
    public amount!: number;
}

InvoiceLineItem.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        invoiceId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sowPaymentPlanItemId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'invoice_line_items',
        timestamps: false,
    }
);

export { InvoiceLineItem };
