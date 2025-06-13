import type { PropGetter, StyleValue } from "../../core"
import type { PaginationControlProps, PaginationItemProps } from "./pagination"
import { useCallback, useMemo } from "react"
import { mergeProps } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useValue } from "../../hooks/use-value"
import { handlerAll } from "../../utils"
import { usePaginationContext, usePaginationPropsContext } from "./pagination"

export interface UsePaginationProps {
  /**
   * The total number of pages in pagination.
   */
  total: number
  /**
   * Number of elements visible on the left/right edges.
   *
   * @default 1
   */
  boundaries?: StyleValue<number>
  /**
   * The initial page of the pagination.
   * Should be less than `total` and greater than `1`.
   *
   * @default 1
   */
  defaultPage?: number
  /**
   * If `true`, the pagination all item will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The page of the pagination.
   * Should be less than `total` and greater than `1`.
   */
  page?: number
  /** Number of siblings displayed on the left/right side of selected page.
   *
   * @default 1
   */
  siblings?: StyleValue<number>
  /**
   * The callback invoked when the page changes.
   */
  onChange?: (page: number) => void
}

export const usePagination = ({
  boundaries: _boundaries = 1,
  defaultPage = 1,
  disabled = false,
  page,
  siblings: _siblings = 1,
  total,
  onChange: onChangeProp,
}: UsePaginationProps) => {
  const siblings = useValue(_siblings)
  const boundaries = useValue(_boundaries)
  const [currentPage, setCurrentPage] = useControllableState({
    defaultValue: defaultPage,
    value: page,
    onChange: onChangeProp,
  })
  const range = useMemo((): ("ellipsis" | number)[] => {
    const minimumTotal = siblings * 2 + 3 + boundaries * 2

    if (minimumTotal >= total) return computedRange(1, total)

    const prevSiblings = Math.max(currentPage - siblings, boundaries)
    const nextSiblings = Math.min(currentPage + siblings, total - boundaries)
    const prevDots = prevSiblings > boundaries + 2
    const nextDots = nextSiblings < total - (boundaries + 1)

    if (!prevDots && nextDots) {
      const prevPages = siblings * 2 + boundaries + 2

      return [
        ...computedRange(1, prevPages),
        "ellipsis",
        ...computedRange(total - (boundaries - 1), total),
      ]
    }

    if (prevDots && !nextDots) {
      const nextPages = boundaries + 1 + 2 * siblings

      return [
        ...computedRange(1, boundaries),
        "ellipsis",
        ...computedRange(total - nextPages, total),
      ]
    }

    return [
      ...computedRange(1, boundaries),
      "ellipsis",
      ...computedRange(prevSiblings, nextSiblings),
      "ellipsis",
      ...computedRange(total - boundaries + 1, total),
    ]
  }, [boundaries, siblings, currentPage, total])

  const onFirst = useCallback(() => setCurrentPage(1), [setCurrentPage])

  const onLast = useCallback(
    () => setCurrentPage(total),
    [setCurrentPage, total],
  )

  const onPrev = useCallback(
    () => setCurrentPage((prev) => (prev === 1 ? prev : prev - 1)),
    [setCurrentPage],
  )

  const onNext = useCallback(
    () => setCurrentPage((prev) => (prev === total ? prev : prev + 1)),
    [setCurrentPage, total],
  )

  const onChange = useCallback(
    (page: number) => setCurrentPage(page),
    [setCurrentPage],
  )

  return {
    currentPage,
    disabled,
    range,
    total,
    onChange,
    onFirst,
    onLast,
    onNext,
    onPrev,
  }
}

export type UsePaginationReturn = ReturnType<typeof usePagination>

const computedRange = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => index + start)

export const usePaginationItem = () => {
  const {
    disabled: _disabled,
    total,
    controlNextProps = {},
    controlPrevProps = {},
    controlProps = {},
    edgeFirstProps = {},
    edgeLastProps = {},
    edgeProps = {},
    itemProps = {},
  } = usePaginationPropsContext() ?? {}
  const { component, currentPage, onChange, onFirst, onLast, onNext, onPrev } =
    usePaginationContext()

  const getItemPrevProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": "Go to previous page",
      disabled: disabled || currentPage === 1,
      page: "prev",
      ...mergeProps(props, itemProps, controlProps, controlPrevProps)(),
      onClick: handlerAll(
        itemProps.onClick,
        controlProps.onClick,
        controlPrevProps.onClick,
        onClick,
        onPrev,
      ),
    }),
    [_disabled, itemProps, controlProps, controlPrevProps, onPrev, currentPage],
  )

  const getItemLastProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": "Go to last page",
      disabled: disabled || currentPage === total,
      page: "last",
      ...mergeProps(props, itemProps, edgeProps, edgeLastProps)(),
      onClick: handlerAll(
        itemProps.onClick,
        edgeProps.onClick,
        edgeLastProps.onClick,
        onClick,
        onLast,
      ),
    }),
    [
      _disabled,
      itemProps,
      edgeProps,
      edgeLastProps,
      onLast,
      currentPage,
      total,
    ],
  )
  const getItemFirstProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": "Go to first page",
      disabled: disabled || currentPage === 1,
      page: "first",
      ...mergeProps(props, itemProps, edgeProps, edgeFirstProps)(),
      onClick: handlerAll(
        itemProps.onClick,
        edgeProps.onClick,
        edgeFirstProps.onClick,
        onClick,
        onFirst,
      ),
    }),
    [_disabled, itemProps, edgeProps, edgeFirstProps, onFirst, currentPage],
  )

  const getItemNextProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    ({ disabled = _disabled, onClick, ...props } = {}) => ({
      "aria-label": "Go to next page",
      disabled: disabled || currentPage === total,
      page: "next",
      ...mergeProps(props, itemProps, controlProps, controlNextProps)(),
      onClick: handlerAll(
        itemProps.onClick,
        controlProps.onClick,
        controlNextProps.onClick,
        onClick,
        onNext,
      ),
    }),
    [
      _disabled,
      itemProps,
      controlProps,
      controlNextProps,
      onNext,
      currentPage,
      total,
    ],
  )

  const getItemNumberProps = useCallback<
    PropGetter<"button", Omit<PaginationItemProps, "page">, { page: number }>
  >(
    ({
      // @ts-expect-error TODO: Fix this type error
      disabled = _disabled,
      // @ts-expect-error TODO: Fix this type error
      page,
      // @ts-expect-error TODO: Fix this type error
      onClick,
      ...props
    }) => ({
      "aria-label": `Go to page ${page}`,
      active: currentPage === page,
      disabled: disabled,
      page,
      ...mergeProps(props, itemProps)(),
      onClick: handlerAll(itemProps.onClick, onClick, () => onChange(page)),
    }),
    [_disabled, itemProps, currentPage, onChange],
  )

  const getItemEllipsisProps = useCallback<
    PropGetter<"button", PaginationControlProps>
  >(
    (props = {}) => ({
      "aria-label": "Ellipsis",
      disabled: true,
      page: "ellipsis",
      ...mergeProps(props, itemProps)(),
    }),
    [itemProps],
  )

  return {
    Component: component,
    getItemEllipsisProps,
    getItemFirstProps,
    getItemLastProps,
    getItemNextProps,
    getItemNumberProps,
    getItemPrevProps,
  }
}
