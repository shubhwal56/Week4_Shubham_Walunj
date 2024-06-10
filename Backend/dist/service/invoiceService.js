"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInvoice = exports.makePayment = exports.createInvoiceLineItem = exports.getInvoices = exports.generateInvoices = void 0;
const sowModel_1 = require("../models/sowModel");
const invoiceModel_1 = require("../models/invoiceModel");
const invoiceLineItemModel_1 = require("../models/invoiceLineItemModel");
const sequelize_1 = require("sequelize");
const generateInvoices = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sows = yield sowModel_1.SOW.findAll({
        where: sequelize_1.Sequelize.where(sequelize_1.Sequelize.fn('DATE', sequelize_1.Sequelize.col('invoiceGenerationDate')), today.toISOString().split('T')[0]),
    });
    const invoices = [];
    for (const sow of sows) {
        const invoice = yield invoiceModel_1.Invoice.create({
            id: `INV_${sow.id}_${new Date().getTime()}`,
            customerId: sow.customerId,
            sowId: sow.id,
            status: 'Drafted',
            totalInvoiceValue: 0,
            invoiceGenerationDate: today,
        });
        invoices.push(invoice);
    }
    return invoices;
});
exports.generateInvoices = generateInvoices;
const getInvoices = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield invoiceModel_1.Invoice.findAll({ include: [{ model: invoiceLineItemModel_1.InvoiceLineItem, as: 'invoiceLineItems' }] });
});
exports.getInvoices = getInvoices;
const createInvoiceLineItem = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const invoiceLineItem = yield invoiceLineItemModel_1.InvoiceLineItem.create(data);
    const invoice = yield invoiceModel_1.Invoice.findByPk(data.invoiceId);
    if (invoice) {
        invoice.totalInvoiceValue += data.amount;
        yield invoice.save();
    }
    return invoiceLineItem;
});
exports.createInvoiceLineItem = createInvoiceLineItem;
const makePayment = (invoiceId, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const invoice = yield invoiceModel_1.Invoice.findByPk(invoiceId);
    if (!invoice) {
        throw new Error('Invoice not found');
    }
    invoice.totalInvoiceValue -= amount;
    if (invoice.totalInvoiceValue <= 0) {
        invoice.status = 'Paid';
    }
    yield invoice.save();
    return invoice;
});
exports.makePayment = makePayment;
const createInvoice = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield invoiceModel_1.Invoice.create(data);
        return invoice;
    }
    catch (error) {
        throw new Error('Error creating invoice');
    }
});
exports.createInvoice = createInvoice;
//# sourceMappingURL=invoiceService.js.map