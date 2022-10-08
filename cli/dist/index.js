"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const path = __importStar(require("path"));
const chokidar_1 = __importDefault(require("chokidar"));
const commander_1 = require("commander");
const lodash_throttle_1 = __importDefault(require("lodash.throttle"));
const tokens_1 = require("./command/tokens");
const utils_1 = require("./utils");
const run = async () => {
    await (0, utils_1.initCLI)();
    commander_1.program
        .command('tokens <source>')
        .option('--watch [path]', 'Watch directory for changes and rebuild')
        .action(async (themeFile, { watchFile }) => {
        if (watchFile) {
            const watchPath = typeof watchFile === 'string' ? watchFile : path.dirname(themeFile);
            const throttledGenerateThemeTypings = (0, lodash_throttle_1.default)(async () => {
                console.time('Generated Theme');
                await (0, tokens_1.generateThemeTypings)({ themeFile });
                console.timeEnd('Generated Theme');
                console.info(new Date().toLocaleString());
            }, 1000);
            throttledGenerateThemeTypings();
            chokidar_1.default.watch(watchPath).on('change', throttledGenerateThemeTypings);
        }
        await (0, tokens_1.generateThemeTypings)({ themeFile });
    });
    commander_1.program.parse();
};
exports.run = run;
(0, exports.run)().catch((e) => {
    console.error(e);
    process.exit(1);
});
