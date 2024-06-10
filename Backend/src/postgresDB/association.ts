import { Organization } from '../models/organizationModel';
import { Customer } from '../models/customerModel';
import { SOW } from '../models/sowModel';
import { PaymentPlan } from '../models/sowPaymentPlanModel';
import { ItemModel } from '../models/sowPaymentPlanItemModel';
import { Invoice } from '../models/invoiceModel';
import { InvoiceLineItem } from '../models/invoiceLineItemModel';


// Organization to Customer associations
Organization.hasMany(Customer, { foreignKey: 'organizationId', as: 'customers' });
Customer.belongsTo(Organization, { foreignKey: 'organizationId', as: 'organization' });

// Customer to SOW associations
Customer.hasMany(SOW, { foreignKey: 'customerId', as: 'sows' });
SOW.belongsTo(Customer, { foreignKey: 'customerId', as: 'customer' });

// Customer to PaymentPlan associations
Customer.hasMany(PaymentPlan, { foreignKey: 'customerId', as: 'paymentPlans' });
PaymentPlan.belongsTo(Customer, { foreignKey: 'customerId', as: 'customer' });

// SOW to PaymentPlan associations
SOW.hasMany(PaymentPlan, { foreignKey: 'sowId', as: 'paymentPlans' });
PaymentPlan.belongsTo(SOW, { foreignKey: 'sowId', as: 'sow' });

// PaymentPlan to SOWPaymentPlanItemModel associations
PaymentPlan.hasMany(ItemModel, { foreignKey: 'sowPaymentPlanId', as: 'items' });
ItemModel.belongsTo(PaymentPlan, { foreignKey: 'sowPaymentPlanId', as: 'paymentPlan' });

// SOW to SOWPaymentPlanItemModel associations
SOW.hasMany(ItemModel, { foreignKey: 'sowId', as: 'items' });
ItemModel.belongsTo(SOW, { foreignKey: 'sowId', as: 'sow' });

// SOW to Invoice associations
SOW.hasMany(Invoice, { foreignKey: 'sowId', as: 'invoices' });
Invoice.belongsTo(SOW, { foreignKey: 'sowId', as: 'sow' });

// Customer to Invoice associations
Customer.hasMany(Invoice, { foreignKey: 'customerId', as: 'invoices' });
Invoice.belongsTo(Customer, { foreignKey: 'customerId', as: 'customer' });

// Invoice to InvoiceLineItem associations
Invoice.hasMany(InvoiceLineItem, { foreignKey: 'invoiceId', as: 'invoiceLineItems' });
InvoiceLineItem.belongsTo(Invoice, { foreignKey: 'invoiceId', as: 'invoice' });

// SOWPaymentPlanItem to InvoiceLineItem associations
ItemModel.hasMany(InvoiceLineItem, { foreignKey: 'sowPaymentPlanItemId', as: 'invoiceLineItems' });
InvoiceLineItem.belongsTo(ItemModel, { foreignKey: 'sowPaymentPlanItemId', as: 'sowPaymentPlanItem' });