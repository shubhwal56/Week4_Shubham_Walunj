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
exports.removeOrganization = exports.updateOrganizationRecord = exports.getOrganizationList = exports.addOrganization = void 0;
const organizationService_1 = require("../service/organizationService");
const addOrganization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield (0, organizationService_1.createOrganization)(req.body);
        res.json(organization);
    }
    catch (err) {
        console.error('Error adding organization:', err);
        res.status(500).json({ error: err.message });
    }
});
exports.addOrganization = addOrganization;
const getOrganizationList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organizations = yield (0, organizationService_1.getOrganizations)();
        res.json(organizations);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getOrganizationList = getOrganizationList;
const updateOrganizationRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = yield (0, organizationService_1.updateOrganization)(req.body);
        res.json({ message });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateOrganizationRecord = updateOrganizationRecord;
const removeOrganization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = yield (0, organizationService_1.deleteOrganization)(req.params.id);
        res.json({ message });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.removeOrganization = removeOrganization;
//# sourceMappingURL=organizationController.js.map