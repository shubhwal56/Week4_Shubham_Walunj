"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const organizationController_1 = require("../controller/organizationController");
const router = express_1.default.Router();
router.post('/', organizationController_1.addOrganization);
router.get('/', organizationController_1.getOrganizationList);
router.put('/organizations/:id', organizationController_1.updateOrganizationRecord);
router.delete('/organizations/:id', organizationController_1.removeOrganization);
exports.default = router;
//# sourceMappingURL=organizationRoutes.js.map