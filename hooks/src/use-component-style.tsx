import { useTheme, useScheme } from '@yamada-ui/providers'
import { ComponentStyle, CSSUIObject, UIStyle, UIStyleProps } from '@yamada-ui/styled'
import {
  getMemoizedObject as get,
  runIfFunc,
  merge,
  filterUndefined,
  omitObject,
} from '@yamada-ui/utils'
import { useRef } from 'react'
import isEqual from 'react-fast-compare'

const getStyles = (
  valOrFunc: UIStyle | Record<string, UIStyle>,
  props: UIStyleProps,
  isMulti?: boolean,
): CSSUIObject | Record<string, CSSUIObject> => {
  let styles = runIfFunc(valOrFunc, props)

  if (isMulti) {
    for (const [key, valOrFunc] of Object.entries<UIStyle>(styles as Record<string, UIStyle>)) {
      const value = runIfFunc(valOrFunc, props)

      styles = merge(styles, { [key]: value })
    }
  }

  return styles
}

const usetStyles = (
  name: string,
  props: any,
  isMulti: boolean = false,
): CSSUIObject | Record<string, CSSUIObject> => {
  const theme = useTheme()
  const { scheme } = useScheme()

  const componentStyle: ComponentStyle | undefined = get(theme, `components.${name}`)

  props = merge(
    componentStyle?.defaultProps ?? {},
    filterUndefined(omitObject(props, ['children'])),
  )

  const ref = useRef<CSSUIObject | Record<string, CSSUIObject>>({})

  if (componentStyle) {
    let styles = getStyles(componentStyle.baseStyle ?? {}, { theme, scheme, ...props }, isMulti)

    const variant = getStyles(
      componentStyle.variants?.[props.variant] ?? {},
      {
        theme,
        scheme,
        ...props,
      },
      isMulti,
    )
    const size = getStyles(
      componentStyle.sizes?.[props.size] ?? {},
      { theme, scheme, ...props },
      isMulti,
    )

    styles = merge(styles, variant)
    styles = merge(styles, size)

    const isStyleEqual = isEqual(ref.current, styles)

    if (!isStyleEqual) ref.current = styles
  }

  return ref.current
}

export const useComponentStyle = (name: string, props: any) =>
  usetStyles(name, props) as CSSUIObject
export const useMultiComponentStyle = (name: string, props: any) =>
  usetStyles(name, props, true) as Record<string, CSSUIObject>
