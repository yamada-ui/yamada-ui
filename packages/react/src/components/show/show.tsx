import type { ReactNode } from "react"
import type { ReactNodeOrFunction } from "../../utils"
import { isValidElement } from "react"
import { runIfFn } from "../../utils"

export interface ShowProps<T> {
  /**
   * The children to render if `when` is `true`
   */
  children: ReactNodeOrFunction<T>
  /**
   * The fallback content to render if `when` is `false`
   */
  fallback?: ReactNode
  /**
   * If `true`, it'll render the `children` prop
   */
  when?: null | T
}

export const Show = <T,>({
  children,
  fallback,
  when,
}: ShowProps<T>): ReactNode => {
  let result: ReactNode

  if (!when) {
    result = fallback
  } else {
    result = runIfFn(children, when)
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isValidElement(result) ? result : <>{result}</>
}
