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
exports.removeCustomer = exports.updateCustomerRecord = exports.getCustomerList = exports.addCustomer = void 0;
const customerService_1 = require("../service/customerService");
const addCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = yield (0, customerService_1.createCustomer)(req.body);
        res.json(customer);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.addCustomer = addCustomer;
const getCustomerList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield (0, customerService_1.getCustomers)();
        res.json(customers);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getCustomerList = getCustomerList;
const updateCustomerRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = yield (0, customerService_1.updateCustomer)(req.body);
        res.json({ message });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateCustomerRecord = updateCustomerRecord;
const removeCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = yield (0, customerService_1.deleteCustomer)(req.params.id);
        res.json({ message });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.removeCustomer = removeCustomer;
//# sourceMappingURL=customerController.js.map