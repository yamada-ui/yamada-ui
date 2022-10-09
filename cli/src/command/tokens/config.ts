export type Config = {
  key: string
  maxScanDepth?: number
  filter?: (value: string) => boolean
  flatMap?: (value: string) => string | string[]
}

export const config: Config[] = [
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
]
