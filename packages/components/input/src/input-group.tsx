import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
  useCreateVars,
} from "@yamada-ui/core"
import { cx, filterUndefined, getValidChildren } from "@yamada-ui/utils"
import { cloneElement } from "react"
import { InputLeftAddon, InputRightAddon } from "./input-addon"
import { InputGroupProvider } from "./input-context"
import { InputLeftElement, InputRightElement } from "./input-element"

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
    display: "flex",
    position: "relative",
    vars,
    width: "100%",
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
    <InputGroupProvider value={{ fieldFontSize, fieldHeight, styles }}>
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

InputGroup.displayName = "InputGroup"
InputGroup.__ui__ = "InputGroup"
