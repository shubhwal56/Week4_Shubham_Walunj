"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const organizationModel_1 = require("../models/organizationModel");
const customerModel_1 = require("../models/customerModel");
const sowModel_1 = require("../models/sowModel");
const sowPaymentPlanModel_1 = require("../models/sowPaymentPlanModel");
const sowPaymentPlanItemModel_1 = require("../models/sowPaymentPlanItemModel");
const invoiceModel_1 = require("../models/invoiceModel");
const invoiceLineItemModel_1 = require("../models/invoiceLineItemModel");
// Organization to Customer associations
organizationModel_1.Organization.hasMany(customerModel_1.Customer, { foreignKey: 'organizationId', as: 'customers' });
customerModel_1.Customer.belongsTo(organizationModel_1.Organization, { foreignKey: 'organizationId', as: 'organization' });
// Customer to SOW associations
customerModel_1.Customer.hasMany(sowModel_1.SOW, { foreignKey: 'customerId', as: 'sows' });
sowModel_1.SOW.belongsTo(customerModel_1.Customer, { foreignKey: 'customerId', as: 'customer' });
// Customer to PaymentPlan associations
customerModel_1.Customer.hasMany(sowPaymentPlanModel_1.PaymentPlan, { foreignKey: 'customerId', as: 'paymentPlans' });
sowPaymentPlanModel_1.PaymentPlan.belongsTo(customerModel_1.Customer, { foreignKey: 'customerId', as: 'customer' });
// SOW to PaymentPlan associations
sowModel_1.SOW.hasMany(sowPaymentPlanModel_1.PaymentPlan, { foreignKey: 'sowId', as: 'paymentPlans' });
sowPaymentPlanModel_1.PaymentPlan.belongsTo(sowModel_1.SOW, { foreignKey: 'sowId', as: 'sow' });
// PaymentPlan to SOWPaymentPlanItemModel associations
sowPaymentPlanModel_1.PaymentPlan.hasMany(sowPaymentPlanItemModel_1.ItemModel, { foreignKey: 'sowPaymentPlanId', as: 'items' });
sowPaymentPlanItemModel_1.ItemModel.belongsTo(sowPaymentPlanModel_1.PaymentPlan, { foreignKey: 'sowPaymentPlanId', as: 'paymentPlan' });
// SOW to SOWPaymentPlanItemModel associations
sowModel_1.SOW.hasMany(sowPaymentPlanItemModel_1.ItemModel, { foreignKey: 'sowId', as: 'items' });
sowPaymentPlanItemModel_1.ItemModel.belongsTo(sowModel_1.SOW, { foreignKey: 'sowId', as: 'sow' });
// SOW to Invoice associations
sowModel_1.SOW.hasMany(invoiceModel_1.Invoice, { foreignKey: 'sowId', as: 'invoices' });
invoiceModel_1.Invoice.belongsTo(sowModel_1.SOW, { foreignKey: 'sowId', as: 'sow' });
// Customer to Invoice associations
customerModel_1.Customer.hasMany(invoiceModel_1.Invoice, { foreignKey: 'customerId', as: 'invoices' });
invoiceModel_1.Invoice.belongsTo(customerModel_1.Customer, { foreignKey: 'customerId', as: 'customer' });
// Invoice to InvoiceLineItem associations
invoiceModel_1.Invoice.hasMany(invoiceLineItemModel_1.InvoiceLineItem, { foreignKey: 'invoiceId', as: 'invoiceLineItems' });
invoiceLineItemModel_1.InvoiceLineItem.belongsTo(invoiceModel_1.Invoice, { foreignKey: 'invoiceId', as: 'invoice' });
// SOWPaymentPlanItem to InvoiceLineItem associations
sowPaymentPlanItemModel_1.ItemModel.hasMany(invoiceLineItemModel_1.InvoiceLineItem, { foreignKey: 'sowPaymentPlanItemId', as: 'invoiceLineItems' });
invoiceLineItemModel_1.InvoiceLineItem.belongsTo(sowPaymentPlanItemModel_1.ItemModel, { foreignKey: 'sowPaymentPlanItemId', as: 'sowPaymentPlanItem' });
//# sourceMappingURL=association.js.map