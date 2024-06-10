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
exports.getPaymentPlanList = exports.addPaymentPlan = void 0;
const paymentPlanService_1 = require("../service/paymentPlanService");
const addPaymentPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plan = yield (0, paymentPlanService_1.createPaymentPlan)(req.body);
        res.json(plan);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.addPaymentPlan = addPaymentPlan;
const getPaymentPlanList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plans = yield (0, paymentPlanService_1.getPaymentPlans)();
        res.json(plans);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getPaymentPlanList = getPaymentPlanList;
//# sourceMappingURL=paymentPlanController.js.map