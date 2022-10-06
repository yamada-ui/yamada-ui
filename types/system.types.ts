import { CSSObject } from '@emotion/styled'
import { CSSUIProps, As, UIComponent, StyledTheme, Dict } from 'types'

export type FunctionCSSInterpolation = { (theme: StyledTheme<Dict>): CSSUIProps }

export type CSSObjectOrFunc = CSSUIProps | FunctionCSSInterpolation

export type StyledOptions = {
  label?: string
  baseStyle?: CSSUIProps | ((props: StyledResolverProps) => CSSUIProps)
}

export type UIFactory = {
  <T extends As, P = {}>(component: T, options?: StyledOptions): UIComponent<T, P>
}

export type StyledResolverProps = CSSUIProps & {
  theme: StyledTheme<Dict>
  __css?: CSSUIProps
  __sx?: CSSUIProps
  animation?: CSSObject | null | undefined | (CSSObject | null | undefined)[]
  css?: CSSObject
}
