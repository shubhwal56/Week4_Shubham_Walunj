import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig';

interface InvoiceAttributes {
    id: string;
    customerId: string;
    sowId: string;
    status: string;
    totalInvoiceValue: number;
    invoiceGenerationDate: Date; 
}

class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
    public id!: string;
    public customerId!: string;
    public sowId!: string;
    public status!: string;
    public totalInvoiceValue!: number;
    public invoiceGenerationDate!: Date; 
}

Invoice.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        customerId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sowId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        totalInvoiceValue: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        invoiceGenerationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'invoices',
        timestamps: false,
    }
);

export { Invoice };
