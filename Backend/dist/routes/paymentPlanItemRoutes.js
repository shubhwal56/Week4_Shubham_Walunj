"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sowPaymentPlanController_1 = require("../controller/sowPaymentPlanController");
const router = (0, express_1.Router)();
router.post('/', sowPaymentPlanController_1.createPaymentPlanItemController);
exports.default = router;
//# sourceMappingURL=paymentPlanItemRoutes.js.map