"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prettier = void 0;

var _prettier = require("prettier");

const prettier = async content => {
  const prettierConfig = await (0, _prettier.resolveConfig)(process.cwd());

  try {
    return (0, _prettier.format)(content, { ...prettierConfig,
      parser: "typescript"
    });
  } catch {
    return content;
  }
};

exports.prettier = prettier;