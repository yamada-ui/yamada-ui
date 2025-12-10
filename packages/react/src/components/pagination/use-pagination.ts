"use client"

import type { HTMLProps, PropGetter } from "../../core"
import { useCallback, useMemo } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useI18n } from "../../providers/i18n-provider"
import { createContext, handlerAll, isNumber, mergeRefs } from "../../utils"

export type Page = "ellipsis" | number

interface PaginationContext extends Omit<UsePaginationReturn, "getRootProps"> {}

const [PaginationContext, usePaginationContext] =
  createContext<PaginationContext>({
    name: "PaginationContext",
  })

export { PaginationContext, usePaginationContext }

export interface UsePaginationProps extends Omit<
  HTMLProps,
  "onChange" | "page"
> {
  /**
   * The total number of pages in pagination.
   */
  total: number
  /**
   * Number of elements visible on the left/right edges.
   *
   * @default 1
   */
  boundaries?: number
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
  siblings?: number
  /**
   * The callback invoked when the page changes.
   */
  onChange?: (page: number) => void
}

export const usePagination = ({
  boundaries = 1,
  defaultPage = 1,
  disabled = false,
  page,
  siblings = 1,
  total,
  onChange: onChangeProp,
  ...rest
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useControllableState({
    defaultValue: defaultPage,
    value: page,
    onChange: onChangeProp,
  })
  const { t } = useI18n("pagination")
  const range = useMemo((): Page[] => {
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

  const onChange = useCallback(
    (page: number) => setCurrentPage(Math.max(1, Math.min(total, page))),
    [setCurrentPage, total],
  )

  const onChangeStart = useCallback(() => setCurrentPage(1), [setCurrentPage])

  const onChangeEnd = useCallback(
    () => setCurrentPage(total),
    [setCurrentPage, total],
  )

  const onChangePrev = useCallback(
    () => setCurrentPage((prev) => Math.max(1, prev - 1)),
    [setCurrentPage],
  )

  const onChangeNext = useCallback(
    () => setCurrentPage((prev) => Math.min(total, prev + 1)),
    [setCurrentPage, total],
  )

  const getRootProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref),
      "aria-label": t("Pagination"),
      role: "navigation",
    }),
    [rest, t],
  )

  const getItemProps: PropGetter<"button", { page?: Page }> = useCallback(
    ({ page, ...props } = {}) => {
      if (isNumber(page)) {
        return {
          type: "button",
          "aria-current": currentPage === page ? "page" : undefined,
          "aria-label": t("Go to page {value}", { value: page }),
          disabled,
          ...props,
          onClick: handlerAll(props.onClick, () => onChange(page)),
        }
      } else {
        return { ...props, "data-ellipsis": "" }
      }
    },
    [currentPage, t, onChange, disabled],
  )

  const getStartTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      type: "button",
      "aria-label": t("Go to first page"),
      disabled: disabled || currentPage === 1,
      ...props,
      onClick: handlerAll(props.onClick, onChangeStart),
    }),
    [onChangeStart, t, disabled, currentPage],
  )

  const getEndTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      type: "button",
      "aria-label": t("Go to last page"),
      disabled: disabled || currentPage === total,
      ...props,
      onClick: handlerAll(props.onClick, onChangeEnd),
    }),
    [onChangeEnd, t, disabled, currentPage, total],
  )

  const getPrevTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      type: "button",
      "aria-label": t("Go to previous page"),
      disabled: disabled || currentPage === 1,
      ...props,
      onClick: handlerAll(props.onClick, onChangePrev),
    }),
    [onChangePrev, t, disabled, currentPage],
  )

  const getNextTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      type: "button",
      "aria-label": t("Go to next page"),
      disabled: disabled || currentPage === total,
      ...props,
      onClick: handlerAll(props.onClick, onChangeNext),
    }),
    [onChangeNext, t, disabled, currentPage, total],
  )

  return {
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
  }
}

export type UsePaginationReturn = ReturnType<typeof usePagination>

const computedRange = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => index + start)
