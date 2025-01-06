import type { CSSUIObject, FC } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import type { HTMLAttributes } from "react"
import type { SortDirection } from "./use-table"
import { ui } from "@yamada-ui/core"
import { ChevronIcon, Icon } from "@yamada-ui/icon"
import { useTableStyles } from "@yamada-ui/native-table"
import { useClickable } from "@yamada-ui/use-clickable"
import { cx } from "@yamada-ui/utils"

export interface TableSortTextButtonProps
  extends HTMLAttributes<HTMLSpanElement> {}

export const TableSortTextButton: FC<TableSortTextButtonProps> = ({
  onClick,
  ...rest
}) => {
  const props = useClickable<HTMLSpanElement>({
    ...rest,
    onClick: (ev) => {
      ev.preventDefault()
      ev.stopPropagation()

      onClick?.(ev)
    },
  })

  const css: CSSUIObject = { outline: "none" }

  return <ui.span __css={css} {...props} tabIndex={-1} />
}

TableSortTextButton.displayName = "TableSortTextButton"
TableSortTextButton.__ui__ = "TableSortTextButton"

export interface TableSortIconProps extends IconProps {
  sorted: false | SortDirection
}

export const TableSortIcon: FC<TableSortIconProps> = ({
  className,
  sorted,
  ...rest
}) => {
  const styles = useTableStyles()

  const css: CSSUIObject = {
    position: "absolute",
    top: "50%",
    transform:
      sorted === "desc"
        ? "translateY(-50%) rotate(180deg)"
        : "translateY(-50%)",
    ...styles.sortIcon,
  }

  if (!sorted) {
    return (
      <Icon
        className={cx("ui-table__sort-icon", className)}
        aria-hidden
        fill="none"
        focusable="false"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        __css={css}
        {...rest}
      >
        <path d="M8 9l4 -4l4 4" />
        <path d="M16 15l-4 4l-4 -4" />
      </Icon>
    )
  }

  return <ChevronIcon __css={css} {...rest} />
}

TableSortIcon.displayName = "TableSortIcon"
TableSortIcon.__ui__ = "TableSortIcon"
