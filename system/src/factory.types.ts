import { CSSUIProps, StyledTheme, CSSObject } from '@yamada-ui/styled'
import { Dict } from '@yamada-ui/utils'
import { As, UIComponent } from './'

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
  sx?: CSSUIProps
  animation?: CSSObject | null | undefined | (CSSObject | null | undefined)[]
  css?: CSSObject
}
