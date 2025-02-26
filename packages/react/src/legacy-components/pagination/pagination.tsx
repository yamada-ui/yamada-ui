import type { FC } from "react"
import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  StyleValue,
} from "../../core"
import type { PaginationItemProps } from "./pagination-item"
import type { UsePaginationProps } from "./use-pagination"
import { useMemo } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { useValue } from "../../hooks/use-value"
import { cx, dataAttr, handlerAll } from "../../utils"
import { PaginationItem } from "./pagination-item"
import { PaginationProvider, usePagination } from "./use-pagination"

interface PaginationOptions {
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

export interface PaginationProps
  extends Omit<HTMLUIProps<"ul">, "children" | "onChange" | "page">,
    ThemeProps<"Pagination">,
    UsePaginationProps,
    PaginationOptions {}

/**
 * `Pagination` is a component for managing the pagination and navigation of content.
 *
 * @see Docs https://yamada-ui.com/components/navigation/pagination
 */
export const Pagination = forwardRef<PaginationProps, "ul">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Pagination", props)
  const {
    className,
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
  } = omitThemeProps(mergedProps)
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
            aria-label={page !== "ellipsis" ? `Go to page ${page}` : undefined}
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
  const css: CSSUIObject = {
    ...styles.container,
  }

  return (
    <PaginationProvider value={styles}>
      <ui.nav
        ref={ref}
        className={cx("ui-pagination", className)}
        data-disabled={dataAttr(disabled)}
        __css={css}
        {...containerProps}
      >
        <ui.ul
          className="ui-pagination-inner"
          data-disabled={dataAttr(disabled)}
          __css={{
            alignItems: "center",
            display: "flex",
            ...styles.inner,
          }}
          {...rest}
        >
          {withEdges ? (
            <ui.li>
              <Component
                className="ui-pagination__item--first"
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
                className="ui-pagination__item--prev"
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
                className="ui-pagination__item--next"
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
                className="ui-pagination__item--last"
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
    </PaginationProvider>
  )
})

Pagination.displayName = "Pagination"
Pagination.__ui__ = "Pagination"
