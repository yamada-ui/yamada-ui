import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { ReactNode } from "react"
import { useComponentStyle } from "@yamada-ui/core"
import { isArray } from "@yamada-ui/utils"

interface ForOptions<T> {
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

export interface ForProps<T>
  extends Omit<HTMLUIProps, "children">,
    ThemeProps<"For">,
    ForOptions<T> {}

/**
 * `For` is a component used to loop over an array and render a component for each item.
 *
 * @see Docs https://yamada-ui.com/components/other/for
 */
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const For = <T extends unknown>(props: ForProps<T>): ReactNode => {
  const [, { children, each, fallback }] = useComponentStyle("For", props)

  if (!each || !isArray(each) || !each.length) return fallback || null

  return each.map(children)
}
