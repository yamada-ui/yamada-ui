import type { CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import type { MotionPropsWithoutChildren } from "@yamada-ui/motion"
import type { ReactNode } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import { PopoverContent } from "@yamada-ui/popover"
import { cx, handlerAll } from "@yamada-ui/utils"
import { useAutocompleteContext } from "./autocomplete-context"
import { useAutocompleteList } from "./use-autocomplete-list"

export interface AutocompleteListProps extends HTMLUIProps<"ul"> {
  footer?: ReactNode
  header?: ReactNode
  contentProps?: MotionPropsWithoutChildren
}

export const AutocompleteList = forwardRef<AutocompleteListProps, "ul">(
  (
    {
      className,
      children,
      footer,
      header,
      maxW,
      maxWidth,
      minW,
      minWidth,
      w,
      width,
      contentProps,
      ...rest
    },
    ref,
  ) => {
    const { styles } = useAutocompleteContext()
    const { getListProps, onAnimationComplete } = useAutocompleteList()

    width ??= w
    width ??= (styles.list?.width ?? styles.list?.w) as CSSUIProps["width"]
    minWidth ??= minW
    minWidth ??= (styles.list?.minWidth ??
      styles.list?.minW) as CSSUIProps["minWidth"]
    maxWidth ??= maxW
    maxWidth ??= (styles.list?.maxWidth ??
      styles.list?.maxW) as CSSUIProps["maxWidth"]

    return (
      <PopoverContent
        as="div"
        className="ui-autocomplete__popover"
        maxWidth={maxWidth}
        minWidth={minWidth}
        width={width}
        __css={{ ...styles.content, maxWidth, minWidth, width }}
        {...contentProps}
        onAnimationComplete={handlerAll(
          contentProps?.onAnimationComplete,
          onAnimationComplete,
        )}
      >
        {header ? (
          <ui.div
            className="ui-autocomplete__header"
            __css={{ ...styles.header }}
          >
            {header}
          </ui.div>
        ) : null}

        <ui.ul
          className={cx("ui-autocomplete__list", className)}
          __css={{ ...styles.list }}
          {...getListProps(rest, ref)}
        >
          {children}
        </ui.ul>

        {footer ? (
          <ui.div
            className="ui-autocomplete__footer"
            __css={{ ...styles.footer }}
          >
            {footer}
          </ui.div>
        ) : null}
      </PopoverContent>
    )
  },
)

AutocompleteList.displayName = "AutocompleteList"
AutocompleteList.__ui__ = "AutocompleteList"
