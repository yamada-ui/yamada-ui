import type { HTMLAttributes } from "react"
import type { IconProps } from "../../components/icon"
import type { CSSUIObject, FC } from "../../core"
import type { SortDirection } from "./use-table"
import { ChevronDownIcon, ChevronsUpDownIcon } from "../../components/icon"
import { ui } from "../../core"
import { useClickable } from "../../hooks/use-clickable"
import { cx } from "../../utils"
import { useTableStyles } from "../native-table"

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
    transform:
      sorted === "desc"
        ? "translateY(-50%) rotate(180deg)"
        : "translateY(-50%)",
    ...styles.sortIcon,
  }

  if (!sorted) {
    return (
      <ChevronsUpDownIcon
        className={cx("ui-table__sort-icon", className)}
        aria-hidden
        __css={css}
        {...rest}
      />
    )
  }

  return <ChevronDownIcon __css={css} {...rest} />
}

TableSortIcon.displayName = "TableSortIcon"
TableSortIcon.__ui__ = "TableSortIcon"
