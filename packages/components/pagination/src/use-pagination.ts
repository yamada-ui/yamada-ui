import type { CSSUIObject, Token } from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { useValue } from "@yamada-ui/use-value"
import { createContext } from "@yamada-ui/utils"
import { useCallback, useMemo } from "react"

interface PaginationContext {
  [key: string]: CSSUIObject | undefined
}

export const [PaginationProvider, usePaginationContext] =
  createContext<PaginationContext>({
    name: "PaginationContext",
    errorMessage: `usePaginationContext returned is 'undefined'. Seems you forgot to wrap the components in "<Pagination />"`,
  })

export const computedRange = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => index + start)

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
  boundaries?: Token<number>
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
  isDisabled?: boolean
  /**
   * The page of the pagination.
   * Should be less than `total` and greater than `1`.
   */
  page?: number
  /** Number of siblings displayed on the left/right side of selected page.
   *
   * @default 1
   */
  siblings?: Token<number>
  /**
   * The callback invoked when the page changes.
   */
  onChange?: (page: number) => void
}

export const usePagination = ({
  boundaries: _boundaries = 1,
  defaultPage = 1,
  isDisabled = false,
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

  const range = useMemo((): ("dots" | number)[] => {
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
        "dots",
        ...computedRange(total - (boundaries - 1), total),
      ]
    }

    if (prevDots && !nextDots) {
      const nextPages = boundaries + 1 + 2 * siblings

      return [
        ...computedRange(1, boundaries),
        "dots",
        ...computedRange(total - nextPages, total),
      ]
    }

    return [
      ...computedRange(1, boundaries),
      "dots",
      ...computedRange(prevSiblings, nextSiblings),
      "dots",
      ...computedRange(total - boundaries + 1, total),
    ]
  }, [boundaries, siblings, currentPage, total])

  return {
    currentPage,
    isDisabled,
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
