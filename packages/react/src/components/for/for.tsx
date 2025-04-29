import type { ReactNode } from "react"
import { isArray } from "../../utils"

interface ForGeneratorOptions<T> {
  /**
   * A function that returns a boolean indicating whether the item should be included in the render result.
   */
  filter?: (value: T, index: number, array: T[]) => boolean
  /**
   * The maximum number of items to include in the render result.
   */
  limit?: number
  /**
   * The number of items to skip before including them in the render result.
   * @default 0
   */
  offset?: number
  /**
   * The boolean value to determine the order of the items in the array.
   * If `true`, the items will be reversed.
   * If `sortBy` is provided, inversion is applied to the sorted array.
   * @default false
   */
  reverse?: boolean
  /**
   * The function to sort the items in the array.
   * If function is provided, the items will be sorted based on the return value.
   * If `reverse` is `true`, the inversion is applied to the sorted array.
   */
  sort?: (a: T, b: T) => number
}

export interface ForProps<T> extends ForGeneratorOptions<T> {
  /**
   * The render function to render each item in the array.
   */
  children: (value: T, index: number, array: T[]) => ReactNode
  /**
   * The array to iterate over.
   */
  each: readonly T[] | T[] | undefined
  /**
   * The fallback content to render when the array is empty.
   */
  fallback?: ReactNode
}

/**
 * `For` is a component used to loop over an array and render a component for each item.
 *
 * @see https://yamada-ui.com/components/for
 */
export const For = <T,>({
  children,
  each,
  fallback,
  filter,
  limit,
  offset = 0,
  reverse = false,
  sort,
}: ForProps<T>): ReactNode => {
  if (!each || !isArray(each) || !each.length) return fallback || null

  const filtered = filter ? each.filter(filter) : each
  const sorted = sort ? filtered.sort(sort) : filtered
  const reversed = reverse ? sorted.reverse() : sorted
  const sliced = reversed.slice(offset, limit ? offset + limit : undefined)

  if (!sliced.length) return fallback || null

  return sliced.map(children)
}
