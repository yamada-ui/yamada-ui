import {
  getMemoizedObject as get,
  runIfFunc,
  merge,
  filterUndefined,
  omitObject,
  Dict,
} from '@yamada-ui/utils'
import { useRef } from 'react'
import isEqual from 'react-fast-compare'
import {
  ComponentStyle,
  CSSUIObject,
  UIStyle,
  UIStyleProps,
  useTheme,
  useColorMode,
} from '..'

type Styles<isMulti extends boolean = false> = isMulti extends false
  ? CSSUIObject
  : Record<string, CSSUIObject>

const getStyles = <IsMulti extends boolean = false>(
  valOrFunc: UIStyle | Record<string, UIStyle>,
  props: UIStyleProps,
  isMulti?: boolean,
): Styles<IsMulti> => {
  let styles = runIfFunc(valOrFunc, props)

  if (isMulti) {
    for (const [key, valOrFunc] of Object.entries<UIStyle>(
      styles as Record<string, UIStyle>,
    )) {
      const value = runIfFunc(valOrFunc, props)

      styles = merge(styles, { [key]: value })
    }
  }

  return styles as Styles<IsMulti>
}

const setStyles = <Props extends Dict = Dict, IsMulti extends boolean = false>(
  name: string,
  props: Props,
  isMulti: boolean = false,
): [styles: Styles<IsMulti>, props: Props] => {
  const { theme } = useTheme()
  const { colorMode } = useColorMode()

  const componentStyle: ComponentStyle | undefined = get(
    theme,
    `components.${name}`,
  )

  const propsRef = useRef<Props>({} as Props)
  const stylesRef = useRef<Styles<IsMulti>>({})

  props = merge(componentStyle?.defaultProps ?? {}, filterUndefined(props))

  if (componentStyle) {
    const args = omitObject(props, ['children'])

    let styles = getStyles<IsMulti>(
      componentStyle.baseStyle ?? {},
      { theme, colorMode, ...args },
      isMulti,
    )

    const variant = getStyles<IsMulti>(
      componentStyle.variants?.[props.variant] ?? {},
      {
        theme,
        colorMode,
        ...args,
      },
      isMulti,
    )
    const size = getStyles<IsMulti>(
      componentStyle.sizes?.[props.size] ?? {},
      { theme, colorMode, ...args },
      isMulti,
    )

    styles = merge(styles, size)
    styles = merge(styles, variant)

    const isStylesEqual = isEqual(stylesRef.current, styles)

    if (!isStylesEqual) stylesRef.current = styles
  }

  const isPropsEqual = isEqual(propsRef.current, props)

  if (!isPropsEqual) propsRef.current = props

  return [stylesRef.current, propsRef.current]
}

export const useComponentStyle = <Props extends Dict = Dict>(
  name: string,
  props: Props,
) => setStyles<Props>(name, props)
export const useMultiComponentStyle = <Props extends Dict = Dict>(
  name: string,
  props: Props,
) => setStyles<Props, true>(name, props, true)
