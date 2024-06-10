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
exports.deletePayment = exports.updatePayment = exports.getPayments = exports.createPayment = void 0;
const paymentModel_1 = require("../models/paymentModel");
const createPayment = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield paymentModel_1.Payment.create(data);
});
exports.createPayment = createPayment;
const getPayments = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield paymentModel_1.Payment.findAll();
});
exports.getPayments = getPayments;
const updatePayment = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = data, paymentData = __rest(data, ["id"]);
    yield paymentModel_1.Payment.update(paymentData, { where: { id } });
    return 'Payment updated successfully';
});
exports.updatePayment = updatePayment;
const deletePayment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield paymentModel_1.Payment.destroy({ where: { id } });
    return 'Payment deleted successfully';
});
exports.deletePayment = deletePayment;
//# sourceMappingURL=paymentService.js.map