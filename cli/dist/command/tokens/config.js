"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = [
    { key: 'borders' },
    { key: 'breakpoints', filter: (value) => Number.isNaN(Number(value)) },
    { key: 'colors', maxScanDepth: 3 },
    { key: 'fonts' },
    { key: 'fontSizes' },
    { key: 'fontWeights' },
    { key: 'letterSpacings' },
    { key: 'lineHeights' },
    { key: 'radii' },
    { key: 'shadows' },
    { key: 'sizes', maxScanDepth: 2 },
    { key: 'spaces', flatMap: (value) => [value, `-${value}`] },
    { key: 'zIndices' },
];
