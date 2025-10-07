/**
 * CodeMirror extensions configuration
 */
export const CODEMIRROR_EXTENSIONS = [
  {
    jsx: true,
    typescript: true,
  },
]

/**
 * CodeMirror basic setup configuration
 */
export const CODEMIRROR_BASIC_SETUP = {
  autocompletion: true,
  highlightActiveLine: true,
  lineNumbers: true,
} as const

/**
 * Resizable component configuration
 */
export const RESIZABLE_CONFIG = {
  defaultSize: 50,
  minSize: 5,
  storageKey: "persistence",
} as const

/**
 * Cookie storage configuration
 */
export const COOKIE_CONFIG = {
  maxAge: 31536000, // 1 year
  path: "/",
} as const
