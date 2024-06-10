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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.updateCustomer = exports.getCustomers = exports.createCustomer = void 0;
const customerModel_1 = require("../models/customerModel");
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield customerModel_1.Customer.create(data);
});
exports.createCustomer = createCustomer;
const getCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield customerModel_1.Customer.findAll();
});
exports.getCustomers = getCustomers;
const updateCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = data, customerData = __rest(data, ["id"]);
    yield customerModel_1.Customer.update(customerData, { where: { id } });
    return 'Customer updated successfully';
});
exports.updateCustomer = updateCustomer;
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield customerModel_1.Customer.destroy({ where: { id } });
    return 'Customer deleted successfully';
});
exports.deleteCustomer = deleteCustomer;
//# sourceMappingURL=customerService.js.map