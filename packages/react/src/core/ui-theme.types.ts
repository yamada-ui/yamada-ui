export interface UITheme {
  animations: string
  blurs: string
  borders: string
  breakpoints: string
  colors: string
  colorSchemes: string
  components: {
    [key: string]: {
      sizes: string
      variants: string
    }
  }
  fonts: string
  fontSizes: string
  fontWeights: string
  gradients: string
  layerStyles: string
  letterSpacings: string
  lineHeights: string
  radii: string
  shadows: string
  sizes: string
  spaces: string
  textStyles: string
  themeSchemes: string
  transitionDuration: string
  transitionEasing: string
  transitionProperty: string
  zIndices: string
}
