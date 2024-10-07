import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { createContext, cx, dataAttr } from "@yamada-ui/utils"
import { useMemo } from "react"

interface ButtonGroupOptions {
  /**
   * The CSS `flex-direction` property.
   */
  direction?: CSSUIObject["flexDirection"]
  /**
   * If `true`, the borderRadius of button that are direct children will be altered to look flushed together.
   *
   * @default false
   */
  isAttached?: boolean
  /**
   * If `true`, all wrapped button will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
}

export interface ButtonGroupProps
  extends Omit<HTMLUIProps, "direction">,
    ThemeProps<"Button">,
    ButtonGroupOptions {}

interface ButtonGroupContext extends ThemeProps<"Button"> {
  isDisabled?: boolean
}

const [ButtonGroupProvider, useButtonGroup] = createContext<ButtonGroupContext>(
  {
    name: "ButtonGroupContext",
    strict: false,
  },
)

export { useButtonGroup }

export const ButtonGroup = forwardRef<ButtonGroupProps, "div">(
  (
    {
      className,
      size,
      variant,
      columnGap,
      direction: flexDirection,
      gap,
      isAttached,
      isDisabled,
      rowGap,
      ...rest
    },
    ref,
  ) => {
    const isColumn =
      flexDirection === "column" || flexDirection === "column-reverse"

    const css: CSSUIObject = {
      display: "inline-flex",
      flexDirection,
    }

    const context: ButtonGroupContext = useMemo(
      () => ({ size, variant, isDisabled }),
      [size, variant, isDisabled],
    )

    if (isAttached) {
      Object.assign(css, {
        "> *:first-of-type:not(:last-of-type)": isColumn
          ? { borderBottomRadius: 0, marginBlockEnd: "-1px" }
          : { borderRightRadius: 0, marginInlineEnd: "-1px" },
        "> *:not(:first-of-type):last-of-type": isColumn
          ? { borderTopRadius: 0, marginBlockStart: "-1px" }
          : { borderLeftRadius: 0 },
        "> *:not(:first-of-type):not(:last-of-type)": isColumn
          ? { borderRadius: 0, marginBlockStart: "-1px" }
          : { borderRadius: 0, marginInlineEnd: "-1px" },
      })
    } else {
      Object.assign(css, {
        columnGap,
        gap,
        rowGap,
      })
    }

    return (
      <ButtonGroupProvider value={context}>
        <ui.div
          ref={ref}
          className={cx("ui-button-group", className)}
          data-attached={dataAttr(isAttached)}
          role="group"
          __css={css}
          {...rest}
        />
      </ButtonGroupProvider>
    )
  },
)

ButtonGroup.displayName = "ButtonGroup"
ButtonGroup.__ui__ = "ButtonGroup"
