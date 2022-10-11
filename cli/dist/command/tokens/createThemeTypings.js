"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThemeTypings = exports.extractKeys = exports.extractPaths = exports.extractColorSchemes = exports.extractTransitions = exports.extractComponents = exports.print = exports.printComponent = void 0;
const utils_1 = require("../../utils");
const config_1 = require("./config");
const defaultKeys = ['primary', 'secondary', 'warning', 'danger', 'link'];
const hueKeys = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
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
const extractTransitions = (theme) => {
    let transitionProperty = [];
    let transitionDuration = [];
    let transitionEasing = [];
    const { transitions } = theme;
    if (!(0, utils_1.isObject)(transitions))
        return { transitionProperty, transitionDuration, transitionEasing };
    Object.entries(transitions).forEach(([key, value]) => {
        switch (key) {
            case 'property':
                transitionProperty = (0, exports.extractPaths)(value);
                break;
            case 'duration':
                transitionDuration = (0, exports.extractPaths)(value);
                break;
            case 'easing':
                transitionEasing = (0, exports.extractPaths)(value);
                break;
            default:
                return;
        }
    });
    return { transitionProperty, transitionDuration, transitionEasing };
};
exports.extractTransitions = extractTransitions;
const isDefault = (key) => defaultKeys.includes(key);
const isHue = (value) => {
    if (!(0, utils_1.isObject)(value))
        return false;
    const keys = Object.keys(value);
    return hueKeys.every((key) => keys.includes(key));
};
const extractColorSchemes = (theme) => {
    const { colors } = theme;
    if (!(0, utils_1.isObject)(colors))
        return [];
    return Object.entries(colors).reduce((array, [key, value]) => {
        if (isHue(value) || isDefault(key))
            array.push(key);
        return array;
    }, []);
};
exports.extractColorSchemes = extractColorSchemes;
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
    const colorSchemes = (0, exports.extractColorSchemes)(theme);
    const { transitionProperty, transitionDuration, transitionEasing } = (0, exports.extractTransitions)(theme);
    const componentTypes = (0, exports.extractComponents)(theme);
    return (0, utils_1.prettier)(`export type GeneratedTheme = { ${(0, exports.print)({
        ...unions,
        textStyles,
        layerStyles,
        colorSchemes,
        transitionProperty,
        transitionDuration,
        transitionEasing,
    })} ${(0, exports.printComponent)(componentTypes)} }`);
};
exports.createThemeTypings = createThemeTypings;
