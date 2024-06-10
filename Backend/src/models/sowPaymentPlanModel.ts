import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig';
import { Customer } from './customerModel';
import { SOW } from './sowModel';

interface PaymentPlanAttributes {
  id: string;
  sowId: string;
  customerId: string;
  plannedInvoiceDate: string;
  totalActualAmount: number;
}

class PaymentPlan extends Model<PaymentPlanAttributes> implements PaymentPlanAttributes {
  public id!: string;
  public sowId!: string;
  public customerId!: string;
  public plannedInvoiceDate!: string;
  public totalActualAmount!: number;
}

PaymentPlan.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  sowId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plannedInvoiceDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalActualAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'payment_plans',
  timestamps: false,
});

export { PaymentPlan };
