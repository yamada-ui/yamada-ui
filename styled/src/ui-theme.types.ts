export type UITheme = {
  layerStyles: string
  textStyles: string
  colorSchemes: string
  borders: string
  colors: string
  breakpoints: string
  fonts: string
  fontSizes: string
  fontWeights: string
  letterSpacings: string
  lineHeights: string
  radii: string
  shadows: string
  sizes: string
  spaces: string
  zIndices: string
  transitionsProperty: string
  transitionsDuration: string
  transitionsEasing: string
  components: {
    [key: string]: {
      sizes: string
      variants: string
    }
  }
}
