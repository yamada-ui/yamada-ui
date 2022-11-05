export type Config = {
  initialColorScheme?: 'light' | 'dark'
  useSystemColorScheme?: boolean
  var?: {
    prefix?: string
  }
}

export const config: Config = {
  initialColorScheme: 'light',
  useSystemColorScheme: false,
  var: {
    prefix: 'ui',
  },
}
