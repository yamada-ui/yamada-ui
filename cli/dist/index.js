"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = void 0;

var path = _interopRequireWildcard(require("path"));

var _chokidar = _interopRequireDefault(require("chokidar"));

var _commander = require("commander");

var _lodash = _interopRequireDefault(require("lodash.throttle"));

var _tokens = require("./command/tokens");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const run = async () => {
  await (0, _utils.initCLI)();

  _commander.program.command("tokens <source>").option("--out <path>", `output file to ${path.join(..._tokens.themePath)}`).option("--watch [path]", "Watch directory for changes and rebuild").action(async (themeFile, {
    out: outFile,
    watch: watchFile
  }) => {
    if (watchFile) {
      const watchPath = typeof watchFile === "string" ? watchFile : path.dirname(themeFile);
      const throttledGenerateThemeTypings = (0, _lodash.default)(async () => {
        console.time("Generated Theme");
        await (0, _tokens.generateThemeTypings)({
          themeFile,
          outFile
        });
        console.timeEnd("Generated Theme");
        console.info(new Date().toLocaleString());
      }, 1e3);
      throttledGenerateThemeTypings();

      _chokidar.default.watch(watchPath).on("change", throttledGenerateThemeTypings);
    } else {
      await (0, _tokens.generateThemeTypings)({
        themeFile,
        outFile
      });
    }
  });

  _commander.program.on("--help", () => {
    console.info(`Example call:

$ yamada-cli tokens theme.ts`);
  });

  _commander.program.parse();
};

exports.run = run;