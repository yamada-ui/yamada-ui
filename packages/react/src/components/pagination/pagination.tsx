import type { ReactNode } from "react"
import type {
  FC,
  HTMLProps,
  HTMLStyledProps,
  StyleValue,
  ThemeProps,
} from "../../core"
import type { PaginationStyle } from "./pagination.style"
import type { UsePaginationProps, UsePaginationReturn } from "./use-pagination"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useValue } from "../../hooks/use-value"
import { dataAttr, handlerAll } from "../../utils"
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
import { usePaginationPropsGetter } from "./use-pagination"

interface PaginationComponentContext
  extends Pick<
      UsePaginationReturn,
      "currentPage" | "onChange" | "onFirst" | "onLast" | "onNext" | "onPrev"
    >,
    Required<Pick<PaginationOptions, "component">> {}

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
   * Props for next of the control button element.
   */
  controlNextProps?: PaginationControlProps
  /**
   * Props for previous of the control button element.
   */
  controlPrevProps?: PaginationControlProps
  /**
   * Props for control button element.
   */
  controlProps?: PaginationControlProps
  /**
   * Props for first of the edge button element.
   */
  edgeFirstProps?: PaginationControlProps
  /**
   * Props for last of the edge button element.
   */
  edgeLastProps?: PaginationControlProps
  /**
   * Props for edge button element.
   */
  edgeProps?: PaginationControlProps
  /**
   * Props for button element.
   */
  itemProps?: PaginationControlProps
  /**
   * Props for root element.
   */
  rootProps?: HTMLProps<"nav">
}

export interface PaginationRootProps
  extends Omit<HTMLStyledProps<"ul">, "children" | "onChange" | "page">,
    ThemeProps<PaginationStyle>,
    UsePaginationProps,
    PaginationOptions {}

export const {
  ComponentContext: PaginationContext,
  PropsContext: PaginationPropsContext,
  useComponentContext: usePaginationContext,
  usePropsContext: usePaginationPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  PaginationRootProps,
  PaginationStyle,
  PaginationComponentContext
>("pagination", paginationStyle)

export const PaginationRoot = withProvider<"nav", PaginationRootProps>(
  ({
    boundaries,
    component = PaginationItem,
    defaultPage,
    disabled,
    page,
    siblings,
    total,
    withControls: _withControls = true,
    withEdges: _withEdges = false,
    rootProps,
    onChange: onChangeProp,
    ...rest
  }) => {
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

    const context = useMemo<PaginationComponentContext>(
      () => ({
        component,
        currentPage,
        onChange,
        onFirst,
        onLast,
        onNext,
        onPrev,
      }),
      [component, currentPage, onNext, onPrev, onFirst, onLast, onChange],
    )

    return (
      <PaginationContext value={context}>
        <styled.nav data-disabled={dataAttr(disabled)} {...rootProps}>
          <PaginationInner data-disabled={dataAttr(disabled)} {...rest}>
            {withEdges ? (
              <styled.li>
                <PaginationItemFirst />
              </styled.li>
            ) : null}

            {withControls ? (
              <styled.li>
                <PaginationItemPrev />
              </styled.li>
            ) : null}

            {range.map((page, key) => (
              <styled.li key={key}>
                {page === "ellipsis" ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationItemNumber page={page} />
                )}
              </styled.li>
            ))}

            {withControls ? (
              <styled.li>
                <PaginationItemNext />
              </styled.li>
            ) : null}

            {withEdges ? (
              <styled.li>
                <PaginationItemLast />
              </styled.li>
            ) : null}
          </PaginationInner>
        </styled.nav>
      </PaginationContext>
    )
  },
  "root",
)()

const PaginationInner = withContext<"ul", HTMLStyledProps<"ul">>(
  "ul",
  "inner",
)()

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
}

export interface PaginationItemProps
  extends Omit<HTMLProps<"button">, "page">,
    PaginationItemOptions {}

export const PaginationItem = withContext<"button", PaginationItemProps>(
  ({
    active,
    page,
    children = iconMap[page] ?? page,
    disabled,
    disableRipple,
    onClick,
    ...rest
  }) => {
    const ellipsis = page === "ellipsis"
    const rippleProps = useRipple({
      ...rest,
      disabled: disableRipple || disabled || ellipsis,
    })

    const Component = styled[ellipsis ? "span" : "button"]

    return (
      <Component
        {...(!ellipsis
          ? {
              type: "button",
              "data-disabled": dataAttr(disabled),
              "data-selected": dataAttr(active),
              disabled,
            }
          : {})}
        tabIndex={!ellipsis ? 0 : -1}
        {...rest}
        onClick={handlerAll(rippleProps.onClick, onClick)}
      >
        {children}
        <Ripple {...rippleProps} />
      </Component>
    )
  },
  "item",
)()

const iconMap: {
  [key in "ellipsis" | "first" | "last" | "next" | "prev" | number]: ReactNode
} = {
  ellipsis: <EllipsisIcon />,
  first: <ChevronsLeftIcon />,
  last: <ChevronsRightIcon />,
  next: <ChevronRightIcon />,
  prev: <ChevronLeftIcon />,
}

export interface PaginationControlProps
  extends Omit<PaginationItemProps, "page"> {}

const PaginationItemPrev = withContext<"button", PaginationControlProps>(
  (props) => {
    const { component: Component } = usePaginationContext()
    const { getItemPrevProps } = usePaginationPropsGetter()
    return <Component {...getItemPrevProps(props)} page="prev" />
  },
  "prev",
)()

const PaginationItemNext = withContext<"button", PaginationControlProps>(
  (props) => {
    const { component: Component } = usePaginationContext()
    const { getItemNextProps } = usePaginationPropsGetter()
    return <Component {...getItemNextProps(props)} page="next" />
  },
  "next",
)()

const PaginationItemFirst = withContext<"button", PaginationControlProps>(
  (props) => {
    const { component: Component } = usePaginationContext()
    const { getItemFirstProps } = usePaginationPropsGetter()
    return <Component {...getItemFirstProps(props)} page="first" />
  },
  "first",
)()

const PaginationItemLast = withContext<"button", PaginationControlProps>(
  (props) => {
    const { component: Component } = usePaginationContext()
    const { getItemLastProps } = usePaginationPropsGetter()
    return <Component {...getItemLastProps(props)} page="last" />
  },
  "last",
)()

const PaginationItemNumber = withContext<"button", PaginationItemProps>(
  (props) => {
    const { component: Component } = usePaginationContext()
    const { getItemNumberProps } = usePaginationPropsGetter()
    return <Component {...getItemNumberProps(props)} />
  },
  "number",
)()

const PaginationEllipsis = withContext<"button", PaginationControlProps>(
  (props) => {
    const { component: Component } = usePaginationContext()
    const { getItemEllipsisProps } = usePaginationPropsGetter()
    return <Component {...getItemEllipsisProps(props)} page="ellipsis" />
  },
  "ellipsis",
)()
