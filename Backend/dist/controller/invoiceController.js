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
exports.createInvoiceController = exports.makePaymentController = exports.createInvoiceLineItemController = exports.getInvoicesController = exports.generateInvoicesController = void 0;
const invoiceService_1 = require("../service/invoiceService");
const generateInvoicesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield (0, invoiceService_1.generateInvoices)();
        res.status(201).json(invoices);
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
});
exports.generateInvoicesController = generateInvoicesController;
const getInvoicesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield (0, invoiceService_1.getInvoices)();
        res.status(200).json(invoices);
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
});
exports.getInvoicesController = getInvoicesController;
const createInvoiceLineItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const invoiceLineItem = yield (0, invoiceService_1.createInvoiceLineItem)(data);
        res.status(201).json(invoiceLineItem);
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
});
exports.createInvoiceLineItemController = createInvoiceLineItemController;
const makePaymentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { invoiceId, amount } = req.body;
        yield (0, invoiceService_1.makePayment)(invoiceId, amount);
        res.status(200).send({ message: 'Payment successful' });
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
});
exports.makePaymentController = makePaymentController;
const createInvoiceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const invoice = yield (0, invoiceService_1.createInvoice)(data);
        res.status(201).json(invoice);
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
});
exports.createInvoiceController = createInvoiceController;
//# sourceMappingURL=invoiceController.js.map