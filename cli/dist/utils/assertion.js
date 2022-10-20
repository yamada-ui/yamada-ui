"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = void 0;
exports.isFunction = isFunction;
exports.isUndefined = exports.isString = exports.isObject = exports.isNumeric = exports.isNumber = exports.isNull = exports.isNotNumber = void 0;

const isNumber = value => typeof value === "number";

exports.isNumber = isNumber;

const isNotNumber = value => typeof value !== "number" || Number.isNaN(value) || !Number.isFinite(value);

exports.isNotNumber = isNotNumber;

const isNumeric = value => value != null && value - parseFloat(value) + 1 >= 0;

exports.isNumeric = isNumeric;

const isString = value => Object.prototype.toString.call(value) === "[object String]";

exports.isString = isString;

const isUndefined = value => typeof value === "undefined" && value === void 0;

exports.isUndefined = isUndefined;

const isNull = value => value === null;

exports.isNull = isNull;

const isObject = obj => obj !== null && (typeof obj === "object" || typeof obj === "function") && !Array.isArray(obj);

exports.isObject = isObject;

const isArray = value => Array.isArray(value);

exports.isArray = isArray;

function isFunction(value) {
  return typeof value === "function";
}