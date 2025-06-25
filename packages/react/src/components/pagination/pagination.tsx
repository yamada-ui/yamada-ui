"use client"

import type { ReactNode } from "react"
import type {
  FC,
  HTMLProps,
  HTMLStyledProps,
  StyleValue,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { ButtonGroupProps, IconButtonProps } from "../button"
import type { PaginationStyle } from "./pagination.style"
import type { Page, UsePaginationProps } from "./use-pagination"
import { cloneElement, isValidElement, useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useValue } from "../../hooks/use-value"
import { useI18n } from "../../providers/i18n-provider"
import { isNumber, runIfFn } from "../../utils"
import { ButtonGroup, IconButton } from "../button"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  EllipsisIcon,
} from "../icon"
import { paginationStyle } from "./pagination.style"
import {
  PaginationContext,
  usePagination,
  usePaginationContext,
} from "./use-pagination"

export interface PaginationRootProps
  extends WithoutThemeProps<
      Omit<ButtonGroupProps, "onChange" | "page">,
      PaginationStyle
    >,
    ThemeProps<PaginationStyle>,
    Omit<UsePaginationProps, "boundaries" | "siblings"> {
  /**
   * Number of elements visible on the left/right edges.
   *
   * @default 1
   */
  boundaries?: StyleValue<number>
  /** Number of siblings displayed on the left/right side of selected page.
   *
   * @default 1
   */
  siblings?: StyleValue<number>
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
  controlNextProps?: PaginationItemProps
  /**
   * Props for previous of the control button element.
   */
  controlPrevProps?: PaginationItemProps
  /**
   * Props for control button element.
   */
  controlProps?: PaginationItemProps
  /**
   * Props for end of the edge button element.
   */
  edgeEndProps?: PaginationItemProps
  /**
   * Props for edge button element.
   */
  edgeProps?: PaginationItemProps
  /**
   * Props for start of the edge button element.
   */
  edgeStartProps?: PaginationItemProps
  /**
   * Props for ellipsis of the element.
   */
  ellipsisProps?: PaginationItemProps
  /**
   * Props for item of the button element.
   */
  itemProps?: PaginationItemProps
}

export const {
  component,
  PropsContext: PaginationPropsContext,
  usePropsContext: usePaginationPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<PaginationRootProps, PaginationStyle>(
  "pagination",
  paginationStyle,
)

/**
 * `Pagination` is a component for managing the pagination and navigation of content.
 *
 * @see https://yamada-ui.com/components/pagination
 */
export const PaginationRoot = withProvider(
  ({
    size,
    variant,
    boundaries: boundariesProp,
    children,
    siblings: siblingsProp,
    withControls: withControlsProp = true,
    withEdges: withEdgesProp = false,
    controlNextProps,
    controlPrevProps,
    controlProps,
    edgeEndProps,
    edgeProps,
    edgeStartProps,
    ellipsisProps,
    itemProps,
    ...rest
  }) => {
    const boundaries = useValue(boundariesProp)
    const siblings = useValue(siblingsProp)
    const withControls = useValue(withControlsProp)
    const withEdges = useValue(withEdgesProp)
    const {
      currentPage,
      disabled,
      range,
      total,
      getEndTriggerProps,
      getItemProps,
      getNextTriggerProps,
      getPrevTriggerProps,
      getRootProps,
      getStartTriggerProps,
      onChange,
      onChangeEnd,
      onChangeNext,
      onChangePrev,
      onChangeStart,
    } = usePagination({ ...rest, boundaries, siblings })
    const context = useMemo(
      () => ({
        currentPage,
        disabled,
        range,
        total,
        getEndTriggerProps,
        getItemProps,
        getNextTriggerProps,
        getPrevTriggerProps,
        getStartTriggerProps,
        onChange,
        onChangeEnd,
        onChangeNext,
        onChangePrev,
        onChangeStart,
      }),
      [
        currentPage,
        disabled,
        range,
        total,
        getEndTriggerProps,
        getItemProps,
        getNextTriggerProps,
        getPrevTriggerProps,
        getStartTriggerProps,
        onChange,
        onChangeEnd,
        onChangeNext,
        onChangePrev,
        onChangeStart,
      ],
    )
    const computedChildren = useMemo(() => {
      if (children) {
        return children
      } else {
        const children: ReactNode[] = []

        if (withEdges)
          children.push(
            <PaginationStartTrigger>
              <PaginationItem
                icon={<ChevronsLeftIcon />}
                {...edgeProps}
                {...edgeStartProps}
              />
            </PaginationStartTrigger>,
          )
        if (withControls)
          children.push(
            <PaginationPrevTrigger>
              <PaginationItem
                icon={<ChevronLeftIcon />}
                {...controlProps}
                {...controlPrevProps}
              />
            </PaginationPrevTrigger>,
          )

        children.push(
          <PaginationItems
            render={(page) =>
              isNumber(page) ? (
                <PaginationItem {...itemProps}>
                  <styled.span role="presentation">{page}</styled.span>
                </PaginationItem>
              ) : (
                <PaginationItem
                  as="span"
                  icon={<EllipsisIcon />}
                  {...ellipsisProps}
                />
              )
            }
          />,
        )

        if (withControls)
          children.push(
            <PaginationNextTrigger>
              <PaginationItem
                icon={<ChevronRightIcon />}
                {...controlProps}
                {...controlNextProps}
              />
            </PaginationNextTrigger>,
          )
        if (withEdges)
          children.push(
            <PaginationEndTrigger>
              <PaginationItem
                icon={<ChevronsRightIcon />}
                {...edgeProps}
                {...edgeEndProps}
              />
            </PaginationEndTrigger>,
          )

        return children
      }
    }, [
      children,
      withEdges,
      withControls,
      itemProps,
      ellipsisProps,
      edgeProps,
      edgeStartProps,
      edgeEndProps,
      controlProps,
      controlPrevProps,
      controlNextProps,
    ])

    return (
      <PaginationContext value={context}>
        <ButtonGroup as="nav" size={size} variant={variant} {...getRootProps()}>
          {computedChildren}
        </ButtonGroup>
      </PaginationContext>
    )
  },
  "root",
  { transferProps: ["variant", "size"] },
)()

export interface PaginationItemsProps {
  children?: (page: Page) => ReactNode
  render?: (page: Page) => ReactNode
}

export const PaginationItems: FC<PaginationItemsProps> = ({
  children,
  render,
}) => {
  const { range, getItemProps } = usePaginationContext()

  return useMemo(
    () =>
      range.map((page, index) => {
        const component = children?.(page) ?? render?.(page)

        if (isValidElement<HTMLProps<"button">>(component)) {
          return cloneElement(component, {
            ...getItemProps({ key: index, page, ...component.props }),
          })
        } else {
          return component
        }
      }),
    [children, getItemProps, range, render],
  )
}

export interface PaginationItemProps extends IconButtonProps {}

export const PaginationItem = withContext<"button", PaginationItemProps>(
  IconButton,
  "item",
)()

export interface PaginationTextProps
  extends Omit<HTMLStyledProps<"span">, "children"> {
  children?: ReactNodeOrFunction<{ page: number; total: number }>
  /**
   * The format of the text.
   *
   * @default 'compact'
   */
  format?: "compact" | "short"
}

export const PaginationText = withContext<"span", PaginationTextProps>(
  "span",
  "text",
)(undefined, ({ children, format = "compact", ...rest }) => {
  const { currentPage, total } = usePaginationContext()
  const { t } = useI18n("pagination")
  const computedChildren = useMemo(() => {
    if (children) {
      return runIfFn(children, { page: currentPage, total })
    } else if (format === "short") {
      return t("text.short", {
        total,
        value: currentPage,
      })
    } else {
      return t("text.compact", {
        total,
        value: currentPage,
      })
    }
  }, [children, currentPage, format, total, t])

  return {
    ...rest,
    children: computedChildren,
  }
})

export interface PaginationStartTriggerProps
  extends HTMLStyledProps<"button"> {}

export const PaginationStartTrigger = withContext<
  "button",
  PaginationStartTriggerProps
>("button", { name: "startTrigger", slot: ["trigger", "start"] })(
  undefined,
  (props) => {
    const { getStartTriggerProps } = usePaginationContext()

    return { asChild: true, ...getStartTriggerProps(props) }
  },
)

export interface PaginationEndTriggerProps extends HTMLStyledProps<"button"> {}

export const PaginationEndTrigger = withContext<
  "button",
  PaginationEndTriggerProps
>("button", { name: "endTrigger", slot: ["trigger", "end"] })(
  undefined,
  (props) => {
    const { getEndTriggerProps } = usePaginationContext()

    return { asChild: true, ...getEndTriggerProps(props) }
  },
)

export interface PaginationPrevTriggerProps extends HTMLStyledProps<"button"> {}

export const PaginationPrevTrigger = withContext<
  "button",
  PaginationPrevTriggerProps
>("button", { name: "prevTrigger", slot: ["trigger", "prev"] })(
  undefined,
  (props) => {
    const { getPrevTriggerProps } = usePaginationContext()

    return { asChild: true, ...getPrevTriggerProps(props) }
  },
)

export interface PaginationNextTriggerProps extends HTMLStyledProps<"button"> {}

export const PaginationNextTrigger = withContext<
  "button",
  PaginationNextTriggerProps
>("button", { name: "nextTrigger", slot: ["trigger", "next"] })(
  undefined,
  (props) => {
    const { getNextTriggerProps } = usePaginationContext()

    return { asChild: true, ...getNextTriggerProps(props) }
  },
)
