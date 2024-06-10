"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invoiceController_1 = require("../controller/invoiceController");
const router = (0, express_1.Router)();
router.post('/', invoiceController_1.generateInvoicesController);
router.get('/', invoiceController_1.getInvoicesController);
router.post('/line-items', invoiceController_1.createInvoiceLineItemController);
router.post('/payments', invoiceController_1.makePaymentController);
router.post('/', invoiceController_1.createInvoiceController);
exports.default = router;
//# sourceMappingURL=invoiceRoutes.js.map