export type Config = {
  initialScheme?: 'light' | 'dark'
  useSystemScheme?: boolean
  var?: {
    prefix?: string
  }
  // screenLoading?: {
  //   disabled?: boolean
  //   bg?: BoxProps['bg']
  //   loading?: {
  //     variant?: LoadingProps['variant']
  //     size?: LoadingProps['size']
  //     color?: LoadingProps['color']
  //     secondaryColor?: LoadingProps['secondaryColor']
  //   }
  // }
  // pageLoading?: {
  //   overlay?: BoxProps['bg']
  //   color?: CenterProps['color']
  //   fontSize?: CenterProps['fontSize']
  //   loading?: {
  //     variant?: LoadingProps['variant']
  //     bg?: CenterProps['bg']
  //     size?: LoadingProps['size']
  //     color?: LoadingProps['color']
  //     secondaryColor?: LoadingProps['secondaryColor']
  //   }
  // }
}

export const config: Config = {
  initialScheme: 'light',
  useSystemScheme: true,
  var: {
    prefix: 'ui',
  },
}
