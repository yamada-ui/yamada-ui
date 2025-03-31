import type { ReactNode } from "react"
import type { HTMLStyledProps } from "../../core"
import { isArray } from "../../utils"

export interface ForProps<T> extends Omit<HTMLStyledProps, "children"> {
  /**
   * The render function to render each item in the array.
   */
  children: (item: T, index: number) => ReactNode
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
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const For = <T extends any>({
  children,
  each,
  fallback,
}: ForProps<T>): ReactNode => {
  if (!each || !isArray(each) || !each.length) return fallback || null

  return each.map(children)
}
