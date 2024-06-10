"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paymentController_1 = require("../controller/paymentController");
const router = express_1.default.Router();
router.post('/payment', paymentController_1.addPayment);
router.get('/payment', paymentController_1.getPaymentList);
router.put('/payment/:id', paymentController_1.updatePaymentRecord);
router.delete('/payment/:id', paymentController_1.removePayment);
exports.default = router;
//# sourceMappingURL=paymentRoutes.js.map