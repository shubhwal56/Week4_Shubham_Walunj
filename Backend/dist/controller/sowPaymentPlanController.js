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
exports.createPaymentPlanItemController = void 0;
const PaymentPlanItemModelService_1 = require("../service/PaymentPlanItemModelService");
const createPaymentPlanItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const invoiceLineItem = yield (0, PaymentPlanItemModelService_1.createInvoiceLineItem)(data);
        res.status(201).json(invoiceLineItem);
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
});
exports.createPaymentPlanItemController = createPaymentPlanItemController;
//# sourceMappingURL=sowPaymentPlanController.js.map