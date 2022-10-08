"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = exports.isArray = exports.isObject = exports.isNull = exports.isUndefined = exports.isString = exports.isNumeric = exports.isNotNumber = exports.isNumber = void 0;
const isNumber = (value) => typeof value === 'number';
exports.isNumber = isNumber;
const isNotNumber = (value) => typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value);
exports.isNotNumber = isNotNumber;
const isNumeric = (value) => value != null && value - parseFloat(value) + 1 >= 0;
exports.isNumeric = isNumeric;
const isString = (value) => Object.prototype.toString.call(value) === '[object String]';
exports.isString = isString;
const isUndefined = (value) => typeof value === 'undefined' && value === undefined;
exports.isUndefined = isUndefined;
const isNull = (value) => value === null;
exports.isNull = isNull;
const isObject = (obj) => obj !== null && (typeof obj === 'object' || typeof obj === 'function') && !Array.isArray(obj);
exports.isObject = isObject;
const isArray = (value) => Array.isArray(value);
exports.isArray = isArray;
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
