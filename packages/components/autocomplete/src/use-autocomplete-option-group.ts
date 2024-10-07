import type { HTMLUIProps, PropGetter } from "@yamada-ui/core"
import type { CSSProperties } from "react"
import { layoutStyleProperties } from "@yamada-ui/core"
import { isArray, splitObject } from "@yamada-ui/utils"
import { useCallback } from "react"
import {
  useAutocompleteContext,
  useAutocompleteDescendantsContext,
} from "./autocomplete-context"

export interface UseAutocompleteOptionGroupProps extends HTMLUIProps<"ul"> {
  /**
   * The label of the autocomplete option group.
   */
  label: string
}

export const useAutocompleteOptionGroup = ({
  label,
  ...rest
}: UseAutocompleteOptionGroupProps) => {
  const { omitSelectedValues, value } = useAutocompleteContext()

  const isMulti = isArray(value)

  const descendants = useAutocompleteDescendantsContext()

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
      !selectedIndexes.includes(index) &&
      "target" in node.dataset,
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
        "data-label": label,
        role: "autocomplete-group-container",
      }
    },
    [containerProps, isEmpty, label],
  )

  const getGroupProps: PropGetter<"ul"> = useCallback(
    (props = {}, ref = null) => ({
      ref,
      ...props,
      ...groupProps,
      "data-label": label,
      role: "autocomplete-group",
    }),
    [groupProps, label],
  )

  return {
    label,
    getContainerProps,
    getGroupProps,
  }
}

export type UseAutocompleteOptionGroupReturn = ReturnType<
  typeof useAutocompleteOptionGroup
>
