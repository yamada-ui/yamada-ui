import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  CSSUIProps,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
  useCreateVars,
} from "@yamada-ui/core"
import { cx, filterUndefined, getValidChildren } from "@yamada-ui/utils"
import { cloneElement } from "react"
import { InputLeftAddon, InputRightAddon } from "./input-addon"
import { InputGroupProvider } from "./input-context"
import { InputRightElement, InputLeftElement } from "./input-element"

export interface InputGroupProps extends HTMLUIProps, ThemeProps<"Input"> {}

export const InputGroup = forwardRef<InputGroupProps, "div">((props, ref) => {
  const [styles] = useComponentMultiStyle("Input", props)
  const { className, children, ...rest } = omitThemeProps(props)

  const [vars, variableProps] = useCreateVars({ ...styles.field, ...rest }, [
    "minHeight",
    "minH",
    "height",
    "h",
    "fontSize",
  ])
  const minHeight = variableProps.minHeight ?? variableProps.minH
  const height = variableProps.height ?? variableProps.h
  const fieldHeight = minHeight ?? height
  const fieldFontSize = variableProps.fontSize

  const css: CSSUIObject = {
    vars,
    ...styles.container,
  }

  const groupProps: CSSUIProps = {}

  const validChildren = getValidChildren(children)

  validChildren.forEach((child: any) => {
    if (fieldHeight && child.type === InputLeftElement)
      groupProps.paddingStart = `${fieldHeight} !important`

    if (fieldHeight && child.type === InputRightElement)
      groupProps.paddingEnd = `${fieldHeight} !important`

    if (child.type === InputLeftAddon) groupProps.roundedLeft = "0px !important"

    if (child.type === InputRightAddon)
      groupProps.roundedRight = "0px !important"
  })

  const cloneChildren = validChildren.map((child) => {
    const isAddonElement = [
      InputLeftAddon,
      InputRightAddon,
      InputLeftElement,
      InputRightElement,
    ].some((type) => child.type === type)

    if (isAddonElement) {
      return child
    } else {
      const childProps = filterUndefined({
        size: child.props?.size ?? props.size,
        variant: child.props?.variant ?? props.variant,
        ...child.props,
      })

      return cloneElement(child, Object.assign(childProps, groupProps))
    }
  })

  return (
    <InputGroupProvider value={{ styles, fieldHeight, fieldFontSize }}>
      <ui.div
        ref={ref}
        className={cx("ui-input-group", className)}
        role="group"
        __css={css}
        {...rest}
      >
        {cloneChildren}
      </ui.div>
    </InputGroupProvider>
  )
})
