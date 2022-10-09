"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThemeTypings = exports.extractKeys = exports.extractPaths = exports.extractComponents = exports.print = exports.printComponent = void 0;
const utils_1 = require("../../utils");
const config_1 = require("./config");
const printComponent = (components) => `components: { ${Object.entries(components)
    .map(([key, unions]) => `${key.match(/^[a-zA-Z0-9\-_]+$/) ? key : `"${key}"`}: { ${(0, exports.print)(unions)}}`)
    .join(`\n`)} }`;
exports.printComponent = printComponent;
const print = (unions) => Object.entries(unions)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, union]) => `${key}: ${union
    .map((value) => `"${value}"`)
    .concat(['(string & {})'])
    .join(' | ')};`)
    .join('\n');
exports.print = print;
const extractComponents = ({ components = {}, }) => Object.entries(components).reduce((obj, [key, { sizes, variants }]) => {
    if (sizes || variants) {
        obj[key] = {
            sizes: Object.keys(sizes ?? {}),
            variants: Object.keys(variants ?? {}),
        };
    }
    return obj;
}, {});
exports.extractComponents = extractComponents;
const extractPaths = (target, maxDepth = 3) => {
    if ((!(0, utils_1.isObject)(target) && !Array.isArray(target)) || !maxDepth)
        return [];
    return Object.entries(target).reduce((array, [key, value]) => {
        if ((0, utils_1.isObject)(value)) {
            (0, exports.extractPaths)(value, maxDepth - 1).forEach((nestedKey) => array.push(`${key}.${nestedKey}`));
        }
        else {
            array.push(key);
        }
        return array;
    }, []);
};
exports.extractPaths = extractPaths;
const extractKeys = (theme, key) => {
    const keys = key.split('.');
    const property = keys.reduce((obj, key) => obj[key] ?? {}, theme);
    if (!(0, utils_1.isObject)(property))
        return [];
    return Object.keys(property);
};
exports.extractKeys = extractKeys;
const createThemeTypings = async (theme) => {
    const unions = config_1.config.reduce((obj, { key, maxScanDepth, filter = () => true, flatMap = (value) => value }) => {
        const target = theme[key];
        obj[key] = [];
        if ((0, utils_1.isObject)(target) || (0, utils_1.isArray)(target)) {
            obj[key] = (0, exports.extractPaths)(target, maxScanDepth).filter(filter).flatMap(flatMap);
        }
        if ((0, utils_1.isObject)(theme.semantic)) {
            const semanticKeys = (0, exports.extractKeys)(theme.semantic, key).filter(filter).flatMap(flatMap);
            obj[key].push(...semanticKeys);
        }
        return obj;
    }, {});
    const textStyles = (0, exports.extractKeys)(theme, 'styles.textStyles');
    const layerStyles = (0, exports.extractKeys)(theme, 'styles.layerStyles');
    const componentTypes = (0, exports.extractComponents)(theme);
    return (0, utils_1.prettier)(`export type GeneratedTheme = { ${(0, exports.print)({
        ...unions,
        textStyles,
        layerStyles,
    })} ${(0, exports.printComponent)(componentTypes)} }`);
};
exports.createThemeTypings = createThemeTypings;
