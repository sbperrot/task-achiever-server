"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_class_1 = __importDefault(require("../models/item.class"));
describe('Items', () => {
    it('should return the first item', () => {
        expect(item_class_1.default.getFirstItems()).toBe('Item1');
    });
});
//# sourceMappingURL=item.test.js.map