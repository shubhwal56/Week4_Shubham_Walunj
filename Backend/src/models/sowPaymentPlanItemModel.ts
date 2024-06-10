import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig';

interface SOWPaymentPlanItemModel {
    id: string;
    sowPaymentPlanId: string;
    sowId: string;
    orderId: string;
    particular: string;
    rate: number;
    unit: number;
    total: number;
}

class ItemModel extends Model<SOWPaymentPlanItemModel> implements SOWPaymentPlanItemModel {
    public id!: string;
    public sowPaymentPlanId!: string;
    public sowId!: string;
    public orderId!: string;
    public particular!: string;
    public rate!: number;
    public unit!: number;
    public total!: number;
}

ItemModel.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        sowPaymentPlanId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sowId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        orderId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        particular: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rate: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        unit: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'SOW_PaymentPlan_items',
        timestamps: false,
    }
);

export { ItemModel };
