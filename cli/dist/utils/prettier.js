"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettier = void 0;
const prettier_1 = require("prettier");
const prettier = async (content) => {
    const prettierConfig = await (0, prettier_1.resolveConfig)(process.cwd());
    try {
        return (0, prettier_1.format)(content, {
            ...prettierConfig,
            parser: 'typescript',
        });
    }
    catch {
        return content;
    }
};
exports.prettier = prettier;
