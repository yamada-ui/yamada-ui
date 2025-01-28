import type { CSSUIProps, FC, HTMLUIProps, ThemeProps } from "../../core"
import { cloneElement } from "react"
import {
  omitThemeProps,
  ui,
  useComponentMultiStyle,
  useCreateVars,
} from "../../core"
import { cx, filterUndefined, getValidChildren } from "../../utils"
import { InputLeftAddon, InputRightAddon } from "./input-addon"
import { InputGroupContext } from "./input-context"
import { InputLeftElement, InputRightElement } from "./input-element"

export interface InputGroupProps extends HTMLUIProps, ThemeProps<"Input"> {}

export const InputGroup: FC<InputGroupProps> = (props) => {
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
    const addonElement = [
      InputLeftAddon,
      InputRightAddon,
      InputLeftElement,
      InputRightElement,
    ].some((type) => child.type === type)

    if (addonElement) {
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
    <InputGroupContext value={{ fieldFontSize, fieldHeight, styles }}>
      <ui.div
        className={cx("ui-input-group", className)}
        role="group"
        __css={{
          vars,
          ...styles.container,
        }}
        {...rest}
      >
        {cloneChildren}
      </ui.div>
    </InputGroupContext>
  )
}

InputGroup.__ui__ = "InputGroup"
