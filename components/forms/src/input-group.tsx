import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  useToken,
  CSSUIProps,
} from '@yamada-ui/system'
import { createContext, cx, filterUndefined, getValidChildren } from '@yamada-ui/utils'
import { cloneElement } from 'react'
import { Input, InputRightElement, InputLeftElement, InputLeftAddon, InputRightAddon } from './'

export type InputGroupProps = HTMLUIProps<'div'> & ThemeProps<'Input'>

type InputGroupContext = Record<string, CSSUIObject>

const [InputGroupProvider, useInputGroup] = createContext<InputGroupContext>({
  name: 'InputGroupContext',
  errorMessage: `useInputGroup returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `,
})

export { useInputGroup }

export const InputGroup = forwardRef<InputGroupProps, 'div'>((props, ref) => {
  const styles = useMultiComponentStyle('Input', props)
  const { className, children, ...rest } = omitThemeProps(props)

  const css: CSSUIObject = {
    width: '100%',
    display: 'flex',
    position: 'relative',
  }
  const groupProps: CSSUIProps = {}
  const height: any =
    useToken('sizes', (styles.container?.height ?? styles.container?.h) as any) ??
    styles.container?.height ??
    styles.container?.h

  const validChildren = getValidChildren(children)

  validChildren.forEach((child: any) => {
    if (height && child.type === InputLeftElement) groupProps.paddingStart = height

    if (height && child.type === InputRightElement) groupProps.paddingEnd = height

    if (child.type === InputLeftAddon) groupProps.roundedLeft = 0

    if (child.type === InputRightAddon) groupProps.roundedRight = 0
  })

  const cloneChildren = validChildren.map((child) => {
    const childProps = filterUndefined({
      size: child.props?.size || props.size,
      variant: child.props?.variant || props.variant,
      ...child.props,
    })

    return child.type !== Input
      ? cloneElement(child, childProps)
      : cloneElement(child, Object.assign(childProps, groupProps))
  })

  return (
    <InputGroupProvider value={styles}>
      <ui.div
        ref={ref}
        className={cx('ui-input-group', className)}
        role='group'
        __css={css}
        {...rest}
      >
        {cloneChildren}
      </ui.div>
    </InputGroupProvider>
  )
})
