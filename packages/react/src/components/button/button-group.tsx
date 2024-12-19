import type {
  CSSUIObject,
  CSSUIProps,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "../../core"
import { useMemo } from "react"
import { ui } from "../../core"
import { createContext, cx, dataAttr } from "../../utils"

interface ButtonGroupOptions {
  /**
   * If `true`, the borderRadius of button that are direct children will be altered to look flushed together.
   *
   * @default false
   */
  attached?: boolean
  /**
   * The CSS `flex-direction` property.
   *
   * @deprecated Use `flexDirection` instead.
   */
  direction?: CSSUIProps["flexDirection"]
  /**
   * If `true`, all wrapped button will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the borderRadius of button that are direct children will be altered to look flushed together.
   *
   * @default false
   *
   * @deprecated Use `attached` instead.
   */
  isAttached?: boolean
  /**
   * If `true`, all wrapped button will be disabled.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
}

export interface ButtonGroupProps
  extends Omit<HTMLUIProps, "direction">,
    ThemeProps<"Button">,
    ButtonGroupOptions {}

interface ButtonGroupContext extends ThemeProps<"Button"> {
  disabled?: boolean
}

const [ButtonGroupContext, useButtonGroupContext] =
  createContext<ButtonGroupContext>({
    name: "ButtonGroupContext",
    strict: false,
  })

export { useButtonGroupContext }

export const ButtonGroup: FC<ButtonGroupProps> = ({
  className,
  size,
  variant,
  isAttached,
  attached = isAttached,
  columnGap,
  direction,
  isDisabled,
  disabled = isDisabled,
  flexDirection = direction,
  gap,
  rowGap,
  ...rest
}) => {
  const column =
    flexDirection === "column" || flexDirection === "column-reverse"

  const css: CSSUIObject = {
    display: "inline-flex",
    flexDirection,
  }

  const value = useMemo<ButtonGroupContext>(
    () => ({ size, variant, disabled }),
    [size, variant, disabled],
  )

  if (attached) {
    Object.assign(css, {
      "> *:first-of-type:not(:last-of-type)": column
        ? { borderBottomRadius: 0 }
        : { borderRightRadius: 0, borderRightWidth: "0px" },
      "> *:not(:first-of-type):last-of-type": column
        ? { borderTopRadius: 0, borderTopWidth: "0px" }
        : { borderLeftRadius: 0 },
      "> *:not(:first-of-type):not(:last-of-type)": column
        ? { borderRadius: 0, borderTopWidth: "0px" }
        : { borderRadius: 0, borderRightWidth: "0px" },
    })
  } else {
    Object.assign(css, {
      columnGap,
      gap,
      rowGap,
    })
  }

  return (
    <ButtonGroupContext value={value}>
      <ui.div
        className={cx("ui-button-group", className)}
        data-attached={dataAttr(attached)}
        role="group"
        __css={css}
        {...rest}
      />
    </ButtonGroupContext>
  )
}

ButtonGroup.__ui__ = "ButtonGroup"
