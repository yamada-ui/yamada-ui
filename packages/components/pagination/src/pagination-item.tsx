import type { CSSUIObject } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import { Ripple, useRipple } from "@yamada-ui/ripple"
import { cx, dataAttr } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef, FC, ReactNode } from "react"
import {
  DotsIcon,
  FirstIcon,
  LastIcon,
  NextIcon,
  PrevIcon,
} from "./pagination-icon"
import { usePaginationContext } from "./use-pagination"

type PaginationItemOptions = {
  /**
   * The type of the page or item assigned to the pagination item.
   */
  page: number | "dots" | "prev" | "next" | "first" | "last"
  /**
   * If `true`, the pagination item will be actived.
   *
   * @default false
   */
  isActive?: boolean
  /**
   * If `true`, the pagination item will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, disable ripple effects when pressing a element.
   *
   * @default false
   */
  disableRipple?: boolean
}

export type PaginationItemProps = ComponentPropsWithoutRef<"button"> &
  PaginationItemOptions

const iconMap: Record<
  number | "dots" | "prev" | "next" | "first" | "last",
  ReactNode
> = {
  dots: <DotsIcon />,
  next: <NextIcon />,
  prev: <PrevIcon />,
  first: <FirstIcon />,
  last: <LastIcon />,
}

export const PaginationItem: FC<PaginationItemProps> = ({
  className,
  isActive,
  page,
  isDisabled,
  disableRipple,
  children,
  ...rest
}) => {
  const styles = usePaginationContext()
  const { onPointerDown, ...rippleProps } = useRipple({
    ...rest,
    isDisabled: disableRipple || isDisabled,
  })

  children ??= iconMap[page] ?? page

  const css: CSSUIObject = {
    position: "relative",
    overflow: "hidden",
    userSelect: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...styles.item,
    ...styles[page],
  }

  return (
    <ui.button
      className={cx("ui-pagination__item", className)}
      type="button"
      tabIndex={page !== "dots" ? 0 : -1}
      disabled={isDisabled}
      data-selected={dataAttr(isActive)}
      data-disabled={dataAttr(isDisabled)}
      __css={css}
      {...rest}
      onPointerDown={onPointerDown}
    >
      {children}

      <Ripple isDisabled={disableRipple || isDisabled} {...rippleProps} />
    </ui.button>
  )
}
