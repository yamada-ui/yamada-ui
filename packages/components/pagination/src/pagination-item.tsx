import type { CSSUIObject } from "@yamada-ui/core"
import type { ComponentPropsWithoutRef, FC, ReactNode } from "react"
import { ui } from "@yamada-ui/core"
import { Ripple, useRipple } from "@yamada-ui/ripple"
import { cx, dataAttr } from "@yamada-ui/utils"
import {
  DotsIcon,
  FirstIcon,
  LastIcon,
  NextIcon,
  PrevIcon,
} from "./pagination-icon"
import { usePaginationContext } from "./use-pagination"

interface PaginationItemOptions {
  /**
   * The type of the page or item assigned to the pagination item.
   */
  page: "dots" | "first" | "last" | "next" | "prev" | number
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
   */
  isActive?: boolean
  /**
   * If `true`, the pagination item will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
}

export interface PaginationItemProps
  extends ComponentPropsWithoutRef<"button">,
    PaginationItemOptions {}

const iconMap: {
  [key in "dots" | "first" | "last" | "next" | "prev" | number]: ReactNode
} = {
  dots: <DotsIcon />,
  first: <FirstIcon />,
  last: <LastIcon />,
  next: <NextIcon />,
  prev: <PrevIcon />,
}

export const PaginationItem: FC<PaginationItemProps> = ({
  className,
  children,
  disableRipple,
  isActive,
  isDisabled,
  page,
  ...rest
}) => {
  const styles = usePaginationContext()
  const { onPointerDown, ...rippleProps } = useRipple({
    ...rest,
    isDisabled: disableRipple || isDisabled,
  })

  children ??= iconMap[page] ?? page

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

  return (
    <ui.button
      type="button"
      className={cx("ui-pagination__item", className)}
      disabled={isDisabled}
      tabIndex={page !== "dots" ? 0 : -1}
      data-disabled={dataAttr(isDisabled)}
      data-selected={dataAttr(isActive)}
      __css={css}
      {...rest}
      onPointerDown={onPointerDown}
    >
      {children}

      <Ripple isDisabled={disableRipple || isDisabled} {...rippleProps} />
    </ui.button>
  )
}
