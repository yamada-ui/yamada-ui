import type { CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { MotionPropsWithoutChildren } from "@yamada-ui/motion"
import { PopoverContent } from "@yamada-ui/popover"
import { cx } from "@yamada-ui/utils"
import type { ReactNode } from "react"
import { useSelectContext, useSelectList } from "./use-select"

export type SelectListProps = HTMLUIProps<"ul"> & {
  contentProps?: MotionPropsWithoutChildren
  header?: ReactNode
  footer?: ReactNode
}

export const SelectList = forwardRef<SelectListProps, "ul">(
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
        width={width}
        minWidth={minWidth}
        maxWidth={maxWidth}
        __css={{ ...styles.content, width, minWidth, maxWidth }}
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
