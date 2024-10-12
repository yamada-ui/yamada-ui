import type { CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import type { MotionPropsWithoutChildren } from "@yamada-ui/motion"
import type { ReactNode } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import { PopoverContent } from "@yamada-ui/popover"
import { cx } from "@yamada-ui/utils"
import { useSelectContext } from "./use-select"
import { useSelectList } from "./use-select-list"

export interface SelectListProps extends HTMLUIProps<"ul"> {
  footer?: ReactNode
  header?: ReactNode
  contentProps?: MotionPropsWithoutChildren
}

export const SelectList = forwardRef<SelectListProps, "ul">(
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
    const { styles } = useSelectContext()
    const { getListProps } = useSelectList()

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
        className="ui-select__content"
        maxWidth={maxWidth}
        minWidth={minWidth}
        width={width}
        __css={{ ...styles.content, maxWidth, minWidth, width }}
        {...contentProps}
      >
        {header ? (
          <ui.div className="ui-select__header" __css={{ ...styles.header }}>
            {header}
          </ui.div>
        ) : null}

        <ui.ul
          className={cx("ui-select__list", className)}
          __css={{ ...styles.list }}
          {...getListProps(rest, ref)}
        >
          {children}
        </ui.ul>

        {footer ? (
          <ui.div className="ui-select__footer" __css={{ ...styles.footer }}>
            {footer}
          </ui.div>
        ) : null}
      </PopoverContent>
    )
  },
)

SelectList.displayName = "SelectList"
SelectList.__ui__ = "SelectList"
