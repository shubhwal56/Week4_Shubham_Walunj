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
exports.deleteSOW = exports.updateSOW = exports.getSOWs = exports.createSOW = void 0;
const sowModel_1 = require("../models/sowModel");
function createSOW(sowData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newSOW = yield sowModel_1.SOW.create(sowData);
            return newSOW;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.createSOW = createSOW;
function getSOWs() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sows = yield sowModel_1.SOW.findAll();
            return sows;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getSOWs = getSOWs;
function updateSOW(sowData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowEntity = yield sowModel_1.SOW.findByPk(sowData.id);
            if (!sowEntity) {
                return "SOW not found!";
            }
            yield sowEntity.update(sowData);
            return "SOW updated successfully";
        }
        catch (err) {
            return `Error updating SOW due to ${err.message}`;
        }
    });
}
exports.updateSOW = updateSOW;
function deleteSOW(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowEntity = yield sowModel_1.SOW.findByPk(id);
            if (!sowEntity) {
                return "SOW not found!";
            }
            yield sowEntity.destroy();
            return "SOW deleted successfully";
        }
        catch (err) {
            return `Error deleting SOW due to ${err.message}`;
        }
    });
}
exports.deleteSOW = deleteSOW;
//# sourceMappingURL=sowService.js.map