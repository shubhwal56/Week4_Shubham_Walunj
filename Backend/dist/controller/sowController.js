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
exports.removeSOW = exports.updateSOWRecord = exports.getSOWList = exports.addSOW = void 0;
const sowService_1 = require("../service/sowService");
const addSOW = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sowData = req.body;
        const newSOW = yield (0, sowService_1.createSOW)(sowData);
        res.status(201).json(newSOW);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.addSOW = addSOW;
const getSOWList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sows = yield (0, sowService_1.getSOWs)();
        res.status(200).json(sows);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getSOWList = getSOWList;
const updateSOWRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sowData = req.body;
        const result = yield (0, sowService_1.updateSOW)(sowData);
        res.status(200).json({ message: result });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateSOWRecord = updateSOWRecord;
const removeSOW = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sowId = req.params.id;
        const result = yield (0, sowService_1.deleteSOW)(sowId);
        res.status(200).json({ message: result });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.removeSOW = removeSOW;
//# sourceMappingURL=sowController.js.map