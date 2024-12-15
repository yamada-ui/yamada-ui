import type { CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import type { MotionPropsWithoutChildren } from "@yamada-ui/motion"
import type { ReactNode } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import { PopoverContent } from "@yamada-ui/popover"
import { cx } from "@yamada-ui/utils"
import { useAutocompleteContext } from "./autocomplete-context"
import { useAutocompleteList } from "./use-autocomplete-list"

export interface AutocompleteListProps extends HTMLUIProps {
  footer?: ReactNode
  header?: ReactNode
  contentProps?: MotionPropsWithoutChildren
}

export const AutocompleteList = forwardRef<AutocompleteListProps, "div">(
  (
    {
      className,
      children,
      footer,
      header,
      maxW,
      maxWidth = maxW,
      minW,
      minWidth = minW,
      w,
      width = w,
      contentProps,
      ...rest
    },
    ref,
  ) => {
    const { styles } = useAutocompleteContext()
    const { getContainerProps, getListProps } = useAutocompleteList()

    width ??= (styles.list?.width ?? styles.list?.w) as CSSUIProps["width"]
    minWidth ??= (styles.list?.minWidth ??
      styles.list?.minW) as CSSUIProps["minWidth"]
    maxWidth ??= (styles.list?.maxWidth ??
      styles.list?.maxW) as CSSUIProps["maxWidth"]

    return (
      <PopoverContent
        as="div"
        className="ui-autocomplete__popover"
        maxWidth={maxWidth}
        minWidth={minWidth}
        width={width}
        __css={styles.content}
        {...getContainerProps(contentProps)}
      >
        {header ? (
          <ui.header className="ui-autocomplete__header" __css={styles.header}>
            {header}
          </ui.header>
        ) : null}

        <ui.div
          className={cx("ui-autocomplete__list", className)}
          __css={styles.list}
          {...getListProps(rest, ref)}
        >
          {children}
        </ui.div>

        {footer ? (
          <ui.footer className="ui-autocomplete__footer" __css={styles.footer}>
            {footer}
          </ui.footer>
        ) : null}
      </PopoverContent>
    )
  },
)

AutocompleteList.displayName = "AutocompleteList"
AutocompleteList.__ui__ = "AutocompleteList"
