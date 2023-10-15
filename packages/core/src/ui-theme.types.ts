export type UITheme = {
  layerStyles: string
  textStyles: string
  animations: string
  blurs: string
  borders: string
  breakpoints: string
  colors: string
  fonts: string
  fontSizes: string
  fontWeights: string
  gradients: string
  letterSpacings: string
  lineHeights: string
  radii: string
  shadows: string
  sizes: string
  spaces: string
  transitionProperty: string
  transitionDuration: string
  transitionEasing: string
  zIndices: string
  colorSchemes: string
  themeSchemes: string
  components: {
    [key: string]: {
      sizes: string
      variants: string
    }
  }
}
