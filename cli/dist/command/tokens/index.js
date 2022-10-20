"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateThemeTypings = void 0;
Object.defineProperty(exports, "themePath", {
  enumerable: true,
  get: function () {
    return _resolveOutputPath.themePath;
  }
});

var _child_process = require("child_process");

var _fs = require("fs");

var path = _interopRequireWildcard(require("path"));

var _util = require("util");

var _ora = _interopRequireDefault(require("ora"));

var _resolveOutputPath = require("./resolve-output-path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const writeFileAsync = (0, _util.promisify)(_fs.writeFile);

const themeWorker = ({
  themeFile
}) => {
  const worker = (0, _child_process.fork)(path.join(__dirname, "..", "..", "scripts", "read-theme-file.worker.js"), [themeFile], {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
    cwd: process.cwd()
  });
  return new Promise((resolve, reject) => {
    worker.on("message", message => {
      const errorMessage = message?.error;

      if (errorMessage) {
        reject(new Error(errorMessage));
      }

      return resolve(String(message));
    });
    worker.on("error", reject);
  });
};

const generateThemeTypings = async ({
  themeFile,
  outFile
}) => {
  const spinner = (0, _ora.default)("Generating Yamada-UI theme typings").start();

  try {
    const theme = await themeWorker({
      themeFile
    });
    const outPath = await (0, _resolveOutputPath.resolveOutputPath)(outFile);
    spinner.info();
    spinner.text = `Write file "${outPath}"...`;
    await writeFileAsync(outPath, theme, "utf8");
    spinner.succeed("Generated");
  } catch (e) {
    spinner.fail("An error occurred");
    if (e instanceof Error) console.error(e.message);
  } finally {
    spinner.stop();
  }
};

exports.generateThemeTypings = generateThemeTypings;