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
require("regenerator-runtime/runtime");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const module_alias_1 = __importDefault(require("module-alias"));
const tsNode = __importStar(require("ts-node"));
const tsConfigPaths = __importStar(require("tsconfig-paths"));
const createThemeTypings_1 = require("../command/tokens/createThemeTypings");
const utils_1 = require("../utils");
const bold = (text) => `\x1b[1m${text}\x1b[22m`;
const importTheme = async (themeFile) => {
    const module = await Promise.resolve().then(() => __importStar(require(themeFile)));
    const theme = module.default ?? module.theme ?? module.defaultTheme;
    if (!theme)
        throw new Error(`
    Theme export not found in module: '${themeFile}'.

    A theme should have a ${bold('default')} export or a ${bold('theme')} named export.
    Found the following exports: ${bold(Object.keys(module).join(', '))}
  `);
    return theme;
};
const readTheme = async (themeFile) => {
    const cwd = process.cwd();
    const rootPath = path_1.default.join(cwd, themeFile);
    const rootDir = path_1.default.dirname(rootPath);
    const tsConfig = tsConfigPaths.loadConfig(rootDir);
    if (tsConfig.resultType === 'success') {
        tsNode.register({
            project: tsConfig.configFileAbsolutePath,
            compilerOptions: {
                module: 'CommonJS',
                esModuleInterop: true,
            },
            transpileOnly: true,
            swc: true,
        });
        const aliases = Object.keys(tsConfig.paths).reduce((obj, value) => {
            const target = tsConfig.paths[value][0].replace(/\*$/, '');
            const key = value.replace(/\/\*$/, '');
            obj[key] = path_1.default.join(tsConfig.absoluteBaseUrl, target);
            return obj;
        }, {});
        module_alias_1.default.addAliases(aliases);
    }
    else {
        const project = path_1.default.join(__dirname, '..', '..', 'bin', 'tsconfig.json');
        tsNode.register({
            project,
        });
    }
    try {
        await fs_1.default.promises.stat(rootPath);
        return await importTheme(rootPath);
    }
    catch (statError) {
        try {
            return importTheme(require.resolve(themeFile, { paths: [cwd] }));
        }
        catch (resolveError) {
            throw new Error(`Theme file or package not found \n${statError} \n${resolveError}`);
        }
    }
};
const run = async () => {
    const themeFile = process.argv[2];
    if (!themeFile)
        throw new Error('No path to theme file provided.');
    let theme = await readTheme(themeFile);
    if (!(0, utils_1.isObject)(theme))
        throw new Error('Theme not found in default or named `theme` export');
    theme = (0, createThemeTypings_1.createThemeTypings)(theme);
    if (process.send) {
        process.send(theme);
    }
    else {
        process.stdout.write(theme);
    }
};
exports.run = run;
(0, exports.run)().catch((e) => {
    console.log(true);
    const error = `${e.toString()}\n${e.stack}`;
    if (process.send) {
        process.send({ error });
    }
    else {
        process.stderr.write(error);
    }
    process.exit(1);
});
