import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  Token,
} from "@yamada-ui/core"
import type { ComponentPropsWithoutRef, FC } from "react"
import type { PaginationItemProps } from "./pagination-item"
import type { UsePaginationProps } from "./use-pagination"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { useValue } from "@yamada-ui/use-value"
import { cx, dataAttr, handlerAll } from "@yamada-ui/utils"
import { useMemo } from "react"
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
  withControls?: Token<boolean>
  /**
   * If `true`, display the edge buttons.
   *
   * @default false
   */
  withEdges?: Token<boolean>
  /**
   * Props for next of the control button element.
   */
  controlNextProps?: HTMLUIProps<"button">
  /**
   * Props for previous of the control button element.
   */
  controlPrevProps?: HTMLUIProps<"button">
  /**
   * Props for control button element.
   */
  controlProps?: HTMLUIProps<"button">
  /**
   * Props for first of the edge button element.
   */
  edgeFirstProps?: HTMLUIProps<"button">
  /**
   * Props for last of the edge button element.
   */
  edgeLastProps?: HTMLUIProps<"button">
  /**
   * Props for edge button element.
   */
  edgeProps?: HTMLUIProps<"button">
  /**
   * Props for inner element.
   */
  innerProps?: HTMLUIProps
  /**
   * Props for button element.
   */
  itemProps?: HTMLUIProps<"button">
}

export interface PaginationProps
  extends Omit<HTMLUIProps, "children" | "onChange" | "page">,
    ThemeProps<"Pagination">,
    UsePaginationProps,
    PaginationOptions {}

/**
 * `Pagination` is a component for managing the pagination and navigation of content.
 *
 * @see Docs https://yamada-ui.com/components/navigation/pagination
 */
export const Pagination = forwardRef<PaginationProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Pagination", props)
  const {
    className,
    boundaries,
    component: Component = PaginationItem,
    defaultPage,
    isDisabled,
    page,
    siblings,
    total,
    withControls: _withControls = true,
    withEdges: _withEdges = false,
    controlNextProps,
    controlPrevProps,
    controlProps,
    edgeFirstProps,
    edgeLastProps,
    edgeProps,
    innerProps,
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
      isDisabled,
      page,
      siblings,
      total,
      onChange: onChangeProp,
    })

  const children = useMemo(
    () =>
      range.map((page, key) => (
        <Component
          key={key}
          isActive={currentPage === page}
          isDisabled={isDisabled}
          page={page}
          aria-label={
            page === "dots" ? "Jump to omitted pages" : `Go to page ${page}`
          }
          {...(itemProps as ComponentPropsWithoutRef<"button">)}
          onClick={handlerAll(
            itemProps?.onClick,
            page !== "dots" ? () => onChange(page) : undefined,
          )}
        />
      )),
    [Component, currentPage, isDisabled, onChange, range, itemProps],
  )

  const css: CSSUIObject = {
    alignItems: "center",
    display: "flex",
    ...styles.container,
  }

  return (
    <PaginationProvider value={styles}>
      <ui.div
        ref={ref}
        className={cx("ui-pagination", className)}
        role="navigation"
        __css={css}
        {...rest}
        data-disabled={dataAttr(isDisabled)}
      >
        {withEdges ? (
          <Component
            className="ui-pagination__item--first"
            isDisabled={isDisabled || currentPage === 1}
            page="first"
            aria-label="Go to first page"
            {...(edgeProps as ComponentPropsWithoutRef<"button">)}
            {...(edgeFirstProps as ComponentPropsWithoutRef<"button">)}
            onClick={handlerAll(
              edgeProps?.onClick,
              edgeFirstProps?.onClick,
              onFirst,
            )}
          />
        ) : null}

        {withControls ? (
          <Component
            className="ui-pagination__item--prev"
            isDisabled={isDisabled || currentPage === 1}
            page="prev"
            aria-label="Go to previous page"
            {...(controlProps as ComponentPropsWithoutRef<"button">)}
            {...(controlPrevProps as ComponentPropsWithoutRef<"button">)}
            onClick={handlerAll(
              controlProps?.onClick,
              controlPrevProps?.onClick,
              onPrev,
            )}
          />
        ) : null}

        <ui.div
          className="ui-pagination-inner"
          __css={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            ...styles.inner,
          }}
          {...innerProps}
        >
          {children}
        </ui.div>

        {withControls ? (
          <Component
            className="ui-pagination__item--next"
            isDisabled={isDisabled || currentPage === total}
            page="next"
            aria-label="Go to next page"
            {...(controlProps as ComponentPropsWithoutRef<"button">)}
            {...(controlNextProps as ComponentPropsWithoutRef<"button">)}
            onClick={handlerAll(
              controlProps?.onClick,
              controlNextProps?.onClick,
              onNext,
            )}
          />
        ) : null}

        {withEdges ? (
          <Component
            className="ui-pagination__item--last"
            isDisabled={isDisabled || currentPage === total}
            page="last"
            aria-label="Go to last page"
            {...(edgeProps as ComponentPropsWithoutRef<"button">)}
            {...(edgeLastProps as ComponentPropsWithoutRef<"button">)}
            onClick={handlerAll(
              edgeProps?.onClick,
              edgeLastProps?.onClick,
              onLast,
            )}
          />
        ) : null}
      </ui.div>
    </PaginationProvider>
  )
})
