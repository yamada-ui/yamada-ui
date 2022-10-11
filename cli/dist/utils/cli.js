"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCLI = void 0;
const cli_check_node_1 = __importDefault(require("cli-check-node"));
const cli_handle_unhandled_1 = __importDefault(require("cli-handle-unhandled"));
const cli_welcome_1 = __importDefault(require("cli-welcome"));
const initCLI = async () => {
    (0, cli_check_node_1.default)('12');
    await (0, cli_handle_unhandled_1.default)();
    (0, cli_welcome_1.default)({
        title: 'Yamada UI CLI',
        tagLine: `by Yamada UI\nGenerate theme tokens for autocomplete`,
        bgColor: `#49b657`,
        color: `#FFFFFF`,
        bold: true,
        clear: false,
        version: '0.1.1',
    });
};
exports.initCLI = initCLI;
