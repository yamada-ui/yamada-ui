import type { CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import type { MotionPropsWithoutChildren } from "@yamada-ui/motion"
import type { ReactNode } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import { PopoverContent } from "@yamada-ui/popover"
import { cx } from "@yamada-ui/utils"
import { useSelectContext } from "./use-select"
import { useSelectList } from "./use-select-list"

export interface SelectListProps extends HTMLUIProps {
  footer?: ReactNode
  header?: ReactNode
  contentProps?: MotionPropsWithoutChildren
}

export const SelectList = forwardRef<SelectListProps, "div">(
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
    const { styles } = useSelectContext()
    const { getContainerProps, getListProps } = useSelectList()

    width ??= (styles.list?.width ?? styles.list?.w) as CSSUIProps["width"]
    minWidth ??= (styles.list?.minWidth ??
      styles.list?.minW) as CSSUIProps["minWidth"]
    maxWidth ??= (styles.list?.maxWidth ??
      styles.list?.maxW) as CSSUIProps["maxWidth"]

    return (
      <PopoverContent
        as="div"
        className="ui-select__content"
        maxWidth={maxWidth}
        minWidth={minWidth}
        width={width}
        __css={styles.content}
        {...getContainerProps(contentProps)}
      >
        {header ? (
          <ui.header className="ui-select__header" __css={styles.header}>
            {header}
          </ui.header>
        ) : null}

        <ui.div
          className={cx("ui-select__list", className)}
          __css={styles.list}
          {...getListProps(rest, ref)}
        >
          {children}
        </ui.div>

        {footer ? (
          <ui.footer className="ui-select__footer" __css={styles.footer}>
            {footer}
          </ui.footer>
        ) : null}
      </PopoverContent>
    )
  },
)

SelectList.displayName = "SelectList"
SelectList.__ui__ = "SelectList"
