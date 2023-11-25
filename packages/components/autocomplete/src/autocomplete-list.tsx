import type { CSSUIObject, CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef } from "@yamada-ui/core"
import { PopoverContent } from "@yamada-ui/popover"
import { cx } from "@yamada-ui/utils"
import { useAutocompleteContext, useAutocompleteList } from "./use-autocomplete"

export type AutocompleteListProps = HTMLUIProps<"ul">

export const AutocompleteList = forwardRef<AutocompleteListProps, "ul">(
  ({ className, w, width, minW, minWidth, ...rest }, ref) => {
    const { styles } = useAutocompleteContext()

    const { getListProps } = useAutocompleteList()

    w =
      w ?? width ?? ((styles.list?.w ?? styles.list?.width) as CSSUIProps["w"])
    minW =
      minW ??
      minWidth ??
      ((styles.list?.minW ?? styles.list?.minWidth) as CSSUIProps["minW"])

    const css: CSSUIObject = { ...styles.list }

    return (
      <PopoverContent
        className={cx("ui-autocomplete__list", className)}
        w={w}
        minW={minW}
        __css={css}
        {...getListProps(rest, ref)}
      />
    )
  },
)
