import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { ReactNode } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import { Ripple, useRipple } from "@yamada-ui/ripple"
import { cx, dataAttr } from "@yamada-ui/utils"
import {
  PaginationEllipsisIcon,
  PaginationFirstIcon,
  PaginationLastIcon,
  PaginationNextIcon,
  PaginationPrevIcon,
} from "./pagination-icon"
import { usePaginationContext } from "./use-pagination"

interface PaginationItemOptions {
  /**
   * The type of the page or item assigned to the pagination item.
   */
  page: "ellipsis" | "first" | "last" | "next" | "prev" | number
  /**
   * If `true`, the pagination item will be activated.
   *
   * @default false
   */
  active?: boolean
  /**
   * If `true`, the pagination item will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, disable ripple effects when pressing a element.
   *
   * @default false
   */
  disableRipple?: boolean
  /**
   * If `true`, the pagination item will be activated.
   *
   * @default false
   *
   * @deprecated Use `active` instead.
   */
  isActive?: boolean
  /**
   * If `true`, the pagination item will be disabled.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
}

export interface PaginationItemProps
  extends Omit<HTMLUIProps<"button">, "page">,
    PaginationItemOptions {}

const iconMap: {
  [key in "ellipsis" | "first" | "last" | "next" | "prev" | number]: ReactNode
} = {
  ellipsis: <PaginationEllipsisIcon />,
  first: <PaginationFirstIcon />,
  last: <PaginationLastIcon />,
  next: <PaginationNextIcon />,
  prev: <PaginationPrevIcon />,
}

export const PaginationItem = forwardRef<PaginationItemProps, "button">(
  (
    {
      className,
      active,
      children,
      disabled,
      disableRipple,
      isActive,
      isDisabled,
      page,
      ...rest
    },
    ref,
  ) => {
    const styles = usePaginationContext()
    const isEllipsis = page === "ellipsis"
    const { onPointerDown, ...rippleProps } = useRipple({
      ...rest,
      isDisabled: disableRipple || isDisabled || isEllipsis,
    })

    children ??= iconMap[page] ?? page
    active ??= isActive
    disabled ??= isDisabled

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
      userSelect: "none",
      ...styles.item,
      ...styles[page],
    }

    const Component = ui[isEllipsis ? "span" : "button"]

    return (
      <Component
        ref={ref}
        {...(!isEllipsis
          ? {
              type: "button",
              "data-disabled": dataAttr(disabled),
              "data-selected": dataAttr(active),
              disabled,
            }
          : {})}
        className={cx(
          "ui-pagination__item",
          isEllipsis ? "ui-pagination__item--ellipsis" : undefined,
          className,
        )}
        tabIndex={!isEllipsis ? 0 : -1}
        __css={css}
        {...rest}
        onPointerDown={onPointerDown}
      >
        {children}

        <Ripple {...rippleProps} />
      </Component>
    )
  },
)

PaginationItem.displayName = "PaginationItem"
PaginationItem.__ui__ = "PaginationItem"
