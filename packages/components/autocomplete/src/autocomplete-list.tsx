import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { motionForwardRef } from "@yamada-ui/motion"
import type { MotionPropsWithoutChildren } from "@yamada-ui/motion"
import type { PopoverContentProps } from "@yamada-ui/popover"
import { PopoverContent } from "@yamada-ui/popover"
import { cx } from "@yamada-ui/utils"
import { useAutocompleteContext, useAutocompleteList } from "./use-autocomplete"

export type AutocompleteListProps = MotionPropsWithoutChildren<"ul">

export const AutocompleteList = motionForwardRef<AutocompleteListProps, "ul">(
  ({ className, w, width, minW, minWidth, ...rest }, ref) => {
    const { styles } = useAutocompleteContext()

    const { getListProps } = useAutocompleteList()

    width ??= w
    width ??= (styles.list?.width ?? styles.list?.w) as CSSUIProps["width"]
    minWidth ??= minW
    minWidth ??= (styles.list?.minWidth ??
      styles.list?.minW) as CSSUIProps["minWidth"]

    const css: CSSUIObject = { ...styles.list }

    return (
      <PopoverContent
        className={cx("ui-autocomplete__list", className)}
        width={width}
        minWidth={minWidth}
        __css={css}
        {...(getListProps(rest, ref) as PopoverContentProps)}
      />
    )
  },
)
