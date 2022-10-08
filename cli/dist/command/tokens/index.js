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
exports.generateThemeTypings = void 0;
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const path = __importStar(require("path"));
const util_1 = require("util");
const ora_1 = __importDefault(require("ora"));
const writeFileAsync = (0, util_1.promisify)(fs_1.writeFile);
const themeWorker = ({ themeFile }) => {
    const worker = (0, child_process_1.fork)(path.join(__dirname, '..', '..', 'scripts', 'readThemeFile.worker.js'), [themeFile], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
        cwd: process.cwd(),
    });
    return new Promise((resolve, reject) => {
        worker.on('message', (message) => {
            const errorMessage = message?.error;
            if (errorMessage) {
                reject(new Error(errorMessage));
            }
            return resolve(String(message));
        });
        worker.on('error', reject);
    });
};
const generateThemeTypings = async ({ themeFile }) => {
    const spinner = (0, ora_1.default)('Generating Yamada-UI theme typings').start();
    try {
        const theme = await themeWorker({
            themeFile,
        });
        ('../../../../types/generated.types.ts');
        // console.log(`\n\n\n${theme}\n\n\n`)
        const outPath = path.join('..', '..', '..', '..', 'types', 'generated.types.ts');
        spinner.info();
        spinner.text = `Write file "${outPath}"...`;
        await writeFileAsync(outPath, theme, 'utf8');
        spinner.succeed('Generated');
    }
    catch (e) {
        spinner.fail('An error occurred');
        if (e instanceof Error)
            console.error(e.message);
    }
    finally {
        spinner.stop();
    }
};
exports.generateThemeTypings = generateThemeTypings;
