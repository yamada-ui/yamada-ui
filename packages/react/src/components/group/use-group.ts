import type { CSSProperties, DataAttributes, ReactNode } from "react"
import { cloneElement, useMemo } from "react"
import { dataAttr, isNull, isUndefined, useValidChildren } from "../../utils"

export const useGroup = (children?: ReactNode) => {
  const validChildren = useValidChildren(children)
  const omittedChildren = useMemo(
    () =>
      validChildren.filter((child) => {
        const ungrouped = child.props["data-ungrouped"]

        return isUndefined(ungrouped) || isNull(ungrouped)
      }),
    [validChildren],
  )
  const count = omittedChildren.length
  const cloneChildren = useMemo(
    () =>
      validChildren.map((child) => {
        const index = omittedChildren.indexOf(child)
        const ungrouped = index === -1

        if (ungrouped) return child

        return cloneElement(child, {
          ...child.props,
          style: {
            "--group-count": count,
            "--group-index": index,
            ...(child.props?.style ?? {}),
          },
          "data-group-between": dataAttr(index > 0 && index < count - 1),
          "data-group-end": dataAttr(index === count - 1),
          "data-group-start": dataAttr(index === 0),
          "data-peer": "",
        })
      }),
    [validChildren, omittedChildren, count],
  )

  return cloneChildren
}

export type UseGroupReturn = ReturnType<typeof useGroup>

interface Props extends DataAttributes {
  style?: CSSProperties
}

export const useGroupItemProps = <Y extends Props>({
  style: {
    "--group-count": groupCount,
    "--group-index": groupIndex,
    ...style
  } = {},
  "data-group-between": dataGroupBetween,
  "data-group-end": dataGroupEnd,
  "data-group-start": dataGroupStart,
  "data-peer": dataPeer,
  ...rest
}: Y) => {
  const pickedProps = useMemo(
    () => ({
      style: {
        "--group-count": groupCount!,
        "--group-index": groupIndex!,
      },
      "data-group-between": dataGroupBetween,
      "data-group-end": dataGroupEnd,
      "data-group-start": dataGroupStart,
      "data-peer": dataPeer,
    }),
    [
      groupCount,
      groupIndex,
      dataGroupBetween,
      dataGroupEnd,
      dataGroupStart,
      dataPeer,
    ],
  )
  const omittedProps = useMemo(() => ({ style, ...rest }), [style, rest])

  return [pickedProps, omittedProps] as const
}

export type UseGroupItemReturn = ReturnType<typeof useGroupItemProps>
