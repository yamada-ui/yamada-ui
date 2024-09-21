import type { CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { MotionPropsWithoutChildren } from "@yamada-ui/motion"
import { PopoverContent } from "@yamada-ui/popover"
import { cx, handlerAll } from "@yamada-ui/utils"
import type { ReactNode } from "react"
import { useAutocompleteContext } from "./autocomplete-context"
import { useAutocompleteList } from "./use-autocomplete-list"

export interface AutocompleteListProps extends HTMLUIProps<"ul"> {
  contentProps?: MotionPropsWithoutChildren
  header?: ReactNode
  footer?: ReactNode
}

export const AutocompleteList = forwardRef<AutocompleteListProps, "ul">(
  (
    {
      className,
      w,
      width,
      minW,
      minWidth,
      maxW,
      maxWidth,
      contentProps,
      header,
      footer,
      children,
      ...rest
    },
    ref,
  ) => {
    const { styles } = useAutocompleteContext()
    const { onAnimationComplete, getListProps } = useAutocompleteList()

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
        width={width}
        minWidth={minWidth}
        maxWidth={maxWidth}
        __css={{ ...styles.content, width, minWidth, maxWidth }}
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
