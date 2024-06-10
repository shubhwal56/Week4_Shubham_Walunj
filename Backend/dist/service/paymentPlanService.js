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
exports.getPaymentPlans = exports.createPaymentPlan = void 0;
const sowPaymentPlanModel_1 = require("../models/sowPaymentPlanModel");
function createPaymentPlan(planData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newPlan = yield sowPaymentPlanModel_1.PaymentPlan.create(planData);
            return newPlan;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.createPaymentPlan = createPaymentPlan;
function getPaymentPlans() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const plans = yield sowPaymentPlanModel_1.PaymentPlan.findAll();
            return plans;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getPaymentPlans = getPaymentPlans;
//# sourceMappingURL=paymentPlanService.js.map