"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paymentPlanController_1 = require("../controller/paymentPlanController");
const router = express_1.default.Router();
router.post('/', paymentPlanController_1.addPaymentPlan);
router.get('/', paymentPlanController_1.getPaymentPlanList);
exports.default = router;
//# sourceMappingURL=paymentPlanRoutes.js.map