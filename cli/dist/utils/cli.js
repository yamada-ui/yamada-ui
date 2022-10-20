"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initCLI = void 0;

var _cliCheckNode = _interopRequireDefault(require("cli-check-node"));

var _cliHandleUnhandled = _interopRequireDefault(require("cli-handle-unhandled"));

var _cliWelcome = _interopRequireDefault(require("cli-welcome"));

var _package = _interopRequireDefault(require("../../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initCLI = async () => {
  (0, _cliCheckNode.default)("12");
  await (0, _cliHandleUnhandled.default)();
  (0, _cliWelcome.default)({
    title: "Yamada UI CLI",
    tagLine: `by Yamada UI
${_package.default.description}`,
    bgColor: `#49b657`,
    color: `#FFFFFF`,
    bold: true,
    clear: false,
    version: _package.default.version
  });
};

exports.initCLI = initCLI;