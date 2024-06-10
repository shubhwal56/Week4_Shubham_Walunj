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
exports.removePayment = exports.updatePaymentRecord = exports.getPaymentList = exports.addPayment = void 0;
const paymentService_1 = require("../service/paymentService");
const addPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield (0, paymentService_1.createPayment)(req.body);
        res.json(payment);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.addPayment = addPayment;
const getPaymentList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payments = yield (0, paymentService_1.getPayments)();
        res.json(payments);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getPaymentList = getPaymentList;
const updatePaymentRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = yield (0, paymentService_1.updatePayment)(req.body);
        res.json({ message });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updatePaymentRecord = updatePaymentRecord;
const removePayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = yield (0, paymentService_1.deletePayment)(req.params.id);
        res.json({ message });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.removePayment = removePayment;
//# sourceMappingURL=paymentController.js.map