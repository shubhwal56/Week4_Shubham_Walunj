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
exports.createInvoiceLineItem = void 0;
const sowPaymentPlanItemModel_1 = require("../models/sowPaymentPlanItemModel");
const createInvoiceLineItem = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceLineItem = yield sowPaymentPlanItemModel_1.ItemModel.create(data);
        return invoiceLineItem;
    }
    catch (error) {
        throw new Error(`Error creating invoice line item: ${error.message}`);
    }
});
exports.createInvoiceLineItem = createInvoiceLineItem;
//# sourceMappingURL=PaymentPlanItemModelService.js.map