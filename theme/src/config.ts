export type Config = {
  initialScheme?: 'light' | 'dark'
  useSystemScheme?: boolean
  var?: {
    prefix?: string
  }
}

export const config: Config = {
  initialScheme: 'light',
  useSystemScheme: false,
  var: {
    prefix: 'ui',
  },
}
