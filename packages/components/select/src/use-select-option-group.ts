import type { HTMLUIProps, PropGetter } from "@yamada-ui/core"
import type { CSSProperties } from "react"
import { layoutStyleProperties } from "@yamada-ui/core"
import { isArray, splitObject } from "@yamada-ui/utils"
import { useCallback } from "react"
import { useSelectContext, useSelectDescendantsContext } from "./use-select"

export interface UseSelectOptionGroupProps extends HTMLUIProps<"ul"> {
  /**
   * The label of the option group.
   */
  label: string
}

export const useSelectOptionGroup = ({
  label,
  ...rest
}: UseSelectOptionGroupProps) => {
  const { omitSelectedValues, value } = useSelectContext()

  const isMulti = isArray(value)

  const descendants = useSelectDescendantsContext()

  const values = descendants.values()
  const selectedValues =
    isMulti && omitSelectedValues
      ? descendants.values(({ node }) =>
          value.includes(node.dataset.value ?? ""),
        )
      : []
  const selectedIndexes = selectedValues.map(({ index }) => index)
  const childValues = values.filter(
    ({ index, node }) =>
      node.parentElement?.dataset.label === label &&
      !selectedIndexes.includes(index),
  )

  const isEmpty = !childValues.length

  const [containerProps, groupProps] = splitObject(rest, layoutStyleProperties)

  const getContainerProps: PropGetter<"li"> = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0px",
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px",
      }

      return {
        ref,
        ...props,
        ...containerProps,
        style: isEmpty ? style : undefined,
      }
    },
    [containerProps, isEmpty],
  )

  const getGroupProps: PropGetter<"ul"> = useCallback(
    ({ "aria-label": ariaLabel, ...props } = {}, ref = null) => {
      ariaLabel ??= label

      return {
        ref,
        "aria-label": ariaLabel,
        role: "group",
        ...props,
        ...groupProps,
        "data-label": label,
      }
    },
    [groupProps, label],
  )

  return {
    label,
    getContainerProps,
    getGroupProps,
  }
}

export type UseSelectOptionGroupReturn = ReturnType<typeof useSelectOptionGroup>
