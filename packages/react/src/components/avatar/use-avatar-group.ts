import type { HTMLProps, PropGetter } from "../../core"
import { useCallback, useMemo } from "react"
import { getValidChildren, isUndefined } from "../../utils"

export interface UseAvatarGroupProps extends HTMLProps {
  /**
   * The maximum number of visible avatars.
   */
  max?: number
  /**
   * Whether to reverse the order of the avatars.
   */
  reverse?: boolean
}

export const useAvatarGroup = ({
  children,
  max,
  reverse,
  ...rest
}: UseAvatarGroupProps = {}) => {
  const validChildren = getValidChildren(children)
  const excess = !isUndefined(max) ? validChildren.length - max : 0

  const getRootProps: PropGetter = useCallback(
    (props) => ({ ...rest, ...props, role: "group" }),
    [rest],
  )

  const cloneChildren = useMemo(() => {
    const omittedChildren = !isUndefined(max)
      ? validChildren.slice(0, max)
      : [...validChildren]

    return reverse ? omittedChildren.reverse() : omittedChildren
  }, [max, validChildren, reverse])

  return {
    children: cloneChildren,
    excess,
    getRootProps,
  }
}

export type UseAvatarGroupReturn = ReturnType<typeof useAvatarGroup>
