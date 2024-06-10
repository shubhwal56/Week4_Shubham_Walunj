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
exports.deleteOrganization = exports.updateOrganization = exports.getOrganizations = exports.createOrganization = void 0;
const organizationModel_1 = require("../models/organizationModel");
const createOrganization = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield organizationModel_1.Organization.create(data);
});
exports.createOrganization = createOrganization;
const getOrganizations = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield organizationModel_1.Organization.findAll();
});
exports.getOrganizations = getOrganizations;
const updateOrganization = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = data, organizationData = __rest(data, ["id"]);
    yield organizationModel_1.Organization.update(organizationData, { where: { id } });
    return 'Organization updated successfully';
});
exports.updateOrganization = updateOrganization;
const deleteOrganization = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield organizationModel_1.Organization.destroy({ where: { id } });
    return 'Organization deleted successfully';
});
exports.deleteOrganization = deleteOrganization;
//# sourceMappingURL=organizationService.js.map