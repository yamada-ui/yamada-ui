import type { FC, ReactNode } from "react"
import type { HTMLUIProps, StyleValue, ThemeProps } from "../../core"
import type { PaginationStyle } from "./pagination.style"
import type { UsePaginationProps } from "./use-pagination"
import { useMemo } from "react"
import { createSlotComponent, mergeCSS, ui } from "../../core"
import { useValue } from "../../hooks/use-value"
import { cx, dataAttr, handlerAll, isNumber } from "../../utils"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  EllipsisIcon,
} from "../icon"
import { Ripple, useRipple } from "../ripple"
import { paginationStyle } from "./pagination.style"
import { usePagination } from "./use-pagination"

export interface PaginationProps
  extends Omit<HTMLUIProps<"ul">, "children" | "onChange" | "page">,
    ThemeProps<PaginationStyle>,
    UsePaginationProps {
  /**
   * The pagination button component to use.
   */
  component?: FC<PaginationItemProps>
  /**
   * If `true`, display the control buttons.
   *
   * @default true
   */
  withControls?: StyleValue<boolean>
  /**
   * If `true`, display the edge buttons.
   *
   * @default false
   */
  withEdges?: StyleValue<boolean>
  /**
   * Props for container element.
   */
  containerProps?: HTMLUIProps<"nav">
  /**
   * Props for next of the control button element.
   */
  controlNextProps?: Omit<PaginationItemProps, "page">
  /**
   * Props for previous of the control button element.
   */
  controlPrevProps?: Omit<PaginationItemProps, "page">
  /**
   * Props for control button element.
   */
  controlProps?: Omit<PaginationItemProps, "page">
  /**
   * Props for first of the edge button element.
   */
  edgeFirstProps?: Omit<PaginationItemProps, "page">
  /**
   * Props for last of the edge button element.
   */
  edgeLastProps?: Omit<PaginationItemProps, "page">
  /**
   * Props for edge button element.
   */
  edgeProps?: Omit<PaginationItemProps, "page">
  /**
   * Props for button element.
   */
  itemProps?: Omit<PaginationItemProps, "page">
}

export const {
  PropsContext: PaginationPropsContext,
  usePropsContext: usePaginationPropsContext,
  useStyleContext,
  withContext,
  withProvider,
} = createSlotComponent<PaginationProps, PaginationStyle>(
  "pagination",
  paginationStyle,
)

/**
 * `Pagination` is a component for managing the pagination and navigation of content.
 *
 * @see Docs https://yamada-ui.com/components/navigation/pagination
 */
export const Pagination = withProvider<"nav", PaginationProps>(
  ({
    ref,
    className,
    css,
    boundaries,
    component: Component = PaginationItem,
    defaultPage,
    disabled,
    page,
    siblings,
    total,
    withControls: _withControls = true,
    withEdges: _withEdges = false,
    containerProps,
    controlNextProps,
    controlPrevProps,
    controlProps,
    edgeFirstProps,
    edgeLastProps,
    edgeProps,
    itemProps,
    onChange: onChangeProp,
    ...rest
  }) => {
    const styles = useStyleContext()
    const withControls = useValue(_withControls)
    const withEdges = useValue(_withEdges)
    const { currentPage, range, onChange, onFirst, onLast, onNext, onPrev } =
      usePagination({
        boundaries,
        defaultPage,
        disabled,
        page,
        siblings,
        total,
        onChange: onChangeProp,
      })

    const children = useMemo(
      () =>
        range.map((page, key) => (
          <ui.li key={key}>
            <Component
              aria-label={
                page !== "ellipsis" ? `Go to page ${page}` : undefined
              }
              active={currentPage === page}
              disabled={disabled}
              {...itemProps}
              page={page}
              onClick={handlerAll(
                itemProps?.onClick,
                page !== "ellipsis" ? () => onChange(page) : undefined,
              )}
            />
          </ui.li>
        )),
      [Component, currentPage, disabled, onChange, range, itemProps],
    )
    return (
      <ui.nav
        ref={ref}
        className={className}
        css={css}
        data-disabled={dataAttr(disabled)}
        {...containerProps}
      >
        <ui.ul
          className="ui-pagination__inner"
          css={styles.inner}
          data-disabled={dataAttr(disabled)}
          {...rest}
        >
          {withEdges ? (
            <ui.li>
              <Component
                aria-label="Go to first page"
                disabled={disabled || currentPage === 1}
                page="first"
                {...edgeProps}
                {...edgeFirstProps}
                onClick={handlerAll(
                  edgeProps?.onClick,
                  edgeFirstProps?.onClick,
                  onFirst,
                )}
              />
            </ui.li>
          ) : null}

          {withControls ? (
            <ui.li>
              <Component
                aria-label="Go to previous page"
                disabled={disabled || currentPage === 1}
                page="prev"
                {...controlProps}
                {...controlPrevProps}
                onClick={handlerAll(
                  controlProps?.onClick,
                  controlPrevProps?.onClick,
                  onPrev,
                )}
              />
            </ui.li>
          ) : null}

          {children}

          {withControls ? (
            <ui.li>
              <Component
                aria-label="Go to next page"
                disabled={disabled || currentPage === total}
                page="next"
                {...controlProps}
                {...controlNextProps}
                onClick={handlerAll(
                  controlProps?.onClick,
                  controlNextProps?.onClick,
                  onNext,
                )}
              />
            </ui.li>
          ) : null}

          {withEdges ? (
            <ui.li>
              <Component
                aria-label="Go to last page"
                disabled={disabled || currentPage === total}
                page="last"
                {...edgeProps}
                {...edgeLastProps}
                onClick={handlerAll(
                  edgeProps?.onClick,
                  edgeLastProps?.onClick,
                  onLast,
                )}
              />
            </ui.li>
          ) : null}
        </ui.ul>
      </ui.nav>
    )
  },
  "root",
)()

export interface PaginationItemProps
  extends Omit<HTMLUIProps<"button">, "page"> {
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
}

const iconMap: {
  [key in "ellipsis" | "first" | "last" | "next" | "prev" | number]: ReactNode
} = {
  ellipsis: <EllipsisIcon />,
  first: <ChevronsLeftIcon />,
  last: <ChevronsRightIcon />,
  next: <ChevronRightIcon />,
  prev: <ChevronLeftIcon />,
}

const PaginationItem = withContext<"button", PaginationItemProps>(
  ({
    page,
    children = iconMap[page] ?? page,
    disabled,
    disableRipple,
    ...rest
  }) => {
    const ellipsis = page === "ellipsis"
    const { onClick, ...rippleProps } = useRipple({
      ...rest,
      disabled: disableRipple || disabled || ellipsis,
    })

    const Component = ui[ellipsis ? "span" : "button"]

    return (
      <Component {...rest} disabled={disabled} onClick={onClick}>
        {children}

        <Ripple {...rippleProps} />
      </Component>
    )
  },
  "item",
)(
  undefined,
  ({
    className: classNameProp,
    css: cssProp,
    active,
    disabled,
    page,
    ...rest
  }) => {
    const props =
      page !== "ellipsis"
        ? {
            type: "button",
            "data-disabled": dataAttr(disabled),
            "data-selected": dataAttr(active),
            tabIndex: 0,
          }
        : {
            tabIndex: -1,
          }

    const styles = useStyleContext()
    const css = !isNumber(page) ? mergeCSS(cssProp, styles[page]) : cssProp
    const className = !isNumber(page)
      ? cx(classNameProp, `ui-pagination__item--${page}`)
      : classNameProp
    return { ...rest, ...props, className, css, active, disabled, page }
  },
)
