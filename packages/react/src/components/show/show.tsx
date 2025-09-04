import type { ReactNode } from "react"
import type { ReactNodeOrFunction } from "../../utils"
import { isValidElement } from "react"
import { runIfFn } from "../../utils"

export interface ShowProps<Y> {
  /**
   * The children to render if `when` is `true`
   */
  children: ReactNodeOrFunction<Y>
  /**
   * The fallback content to render if `when` is `false`
   */
  fallback?: ReactNode
  /**
   * If `true`, it'll render the `children` prop
   */
  when?: null | Y
}

/**
 * `Show` is a component that shows or hides its children based on a condition.
 *
 * @see https://yamada-ui.com/docs/components/show
 */
export const Show = <Y,>({
  children,
  fallback,
  when,
}: ShowProps<Y>): ReactNode => {
  let result: ReactNode

  if (!when) {
    result = fallback
  } else {
    result = runIfFn(children, when)
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isValidElement(result) ? result : <>{result}</>
}
