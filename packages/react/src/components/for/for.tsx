import type { ReactNode } from "react"
import { isArray } from "../../utils"

export interface ForProps<Y> {
  /**
   * The render function to render each item in the array.
   */
  children: (value: Y, index: number, array: Y[]) => ReactNode
  /**
   * The array to iterate over.
   */
  each: readonly Y[] | undefined | Y[]
  /**
   * The fallback content to render when the array is empty.
   */
  fallback?: ReactNode
  /**
   * A function that returns a boolean indicating whether the item should be included in the render result.
   */
  filter?: (value: Y, index: number, array: Y[]) => boolean
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
  sort?: (a: Y, b: Y) => number
  /**
   * The number of times to repeat the component.
   */
  times?: number
}

/**
 * `For` is a component used to loop over an array and render a component for each item.
 *
 * @see https://yamada-ui.com/docs/components/for
 */
export const For = <Y,>({
  children,
  each,
  fallback,
  filter,
  limit,
  offset = 0,
  reverse = false,
  sort,
  times,
}: ForProps<Y>): ReactNode => {
  if (!each || !isArray(each) || !each.length) return fallback || null

  const cloned = [...each]
  const filtered = filter ? cloned.filter(filter) : cloned
  const sorted = sort ? filtered.sort(sort) : filtered
  const reversed = reverse ? sorted.reverse() : sorted
  const sliced = reversed.slice(offset, limit ? offset + limit : undefined)

  if (!sliced.length) return fallback || null

  const rendered = sliced.map(children)

  if (typeof times === "number" && times > 1) {
    const unitLength = rendered.length
    const totalLength = unitLength * times
    const repeated = new Array<ReactNode>(totalLength)
    for (let i = 0; i < times; i += 1) {
      const baseIndex = i * unitLength
      for (let j = 0; j < unitLength; j += 1) {
        repeated[baseIndex + j] = rendered[j]
      }
    }
    return repeated
  }

  return rendered
}
