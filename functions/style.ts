import { ComponentStyle, CSSUIObject } from '../types'
import { styles, pseudos } from '../configs'
import { useRef } from 'react'
import { useTheme, useScheme } from '../hooks'
import { getMemoizedObject as get, runIfFunc, merge, filterUndefined, omitObject } from '../utils'
import isEqual from 'react-fast-compare'

const styleProps = { ...styles, ...pseudos }

export const isPropStyle = (prop: string, value?: any): boolean =>
  value === undefined
    ? prop in styleProps
    : prop in styleProps && value !== null && value !== undefined

export const useComponentStyle = (name: string, props: any): CSSUIObject => {
  const theme = useTheme()
  const { scheme } = useScheme()

  const componentStyle: ComponentStyle | undefined = get(theme, `components.${name}`)

  props = merge(
    componentStyle?.defaultProps ?? {},
    filterUndefined(omitObject(props, ['children'])),
  )

  const ref = useRef<CSSUIObject>({})

  if (componentStyle) {
    let style = runIfFunc(componentStyle.baseStyle ?? {}, theme, scheme)

    const variant = runIfFunc(componentStyle.variants?.[props.variant] ?? {}, theme, scheme)
    const size = runIfFunc(componentStyle.sizes?.[props.size] ?? {}, theme, scheme)

    style = merge(style, variant)
    style = merge(style, size)

    const isStyleEqual = isEqual(ref.current, style)

    if (!isStyleEqual) ref.current = style
  }

  return ref.current
}
