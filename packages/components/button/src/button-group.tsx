import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { createContext, cx, dataAttr } from "@yamada-ui/utils"
import { useMemo } from "react"

type ButtonGroupOptions = {
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

export type ButtonGroupProps = Omit<HTMLUIProps<"div">, "direction"> &
  ThemeProps<"Button"> &
  ButtonGroupOptions

type ButtonGroupContext = ThemeProps<"Button"> & {
  isDisabled?: boolean
}

const [ButtonGroupProvider, useButtonGroup] = createContext<ButtonGroupContext>(
  {
    strict: false,
    name: "ButtonGroupContext",
  },
)

export { useButtonGroup }

export const ButtonGroup = forwardRef<ButtonGroupProps, "div">(
  (
    {
      className,
      size,
      variant,
      direction: flexDirection,
      isAttached,
      isDisabled,
      gap,
      columnGap,
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
        "> *:not(:first-of-type):not(:last-of-type)": isColumn
          ? { borderRadius: 0, marginBlockStart: "-1px" }
          : { borderRadius: 0, marginInlineEnd: "-1px" },
        "> *:not(:first-of-type):last-of-type": isColumn
          ? { borderTopRadius: 0, marginBlockStart: "-1px" }
          : { borderLeftRadius: 0 },
      })
    } else {
      Object.assign(css, {
        gap,
        columnGap,
        rowGap,
      })
    }

    return (
      <ButtonGroupProvider value={context}>
        <ui.div
          ref={ref}
          role="group"
          className={cx("ui-button-group", className)}
          data-attached={dataAttr(isAttached)}
          __css={css}
          {...rest}
        />
      </ButtonGroupProvider>
    )
  },
)
