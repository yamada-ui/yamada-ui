import type { HTMLUIProps, PropGetter } from "@yamada-ui/core"
import type { CSSProperties } from "react"
import { layoutStyleProperties } from "@yamada-ui/core"
import { isArray, mergeRefs, splitObject } from "@yamada-ui/utils"
import { useCallback, useId, useRef } from "react"
import {
  useAutocompleteContext,
  useAutocompleteDescendantsContext,
} from "./autocomplete-context"

export interface UseAutocompleteOptionGroupProps extends HTMLUIProps {
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
  const descendants = useAutocompleteDescendantsContext()
  const labelRef = useRef<HTMLDivElement>(null)
  const labelId = useId()
  const values = descendants.values()
  const multi = isArray(value)
  const selectedValues =
    multi && omitSelectedValues
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
  const empty = !childValues.length

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
        "aria-labelledby": labelRef.current?.id,
        role: "group",
        ...props,
        ...containerProps,
        style: empty ? style : undefined,
      }
    },
    [containerProps, empty],
  )

  const getLabelProps: PropGetter = useCallback(
    ({ id, ...props } = {}, ref = null) => {
      return {
        id: id ?? labelId,
        ref: mergeRefs(ref, labelRef),
        role: "presentation",
        ...props,
      }
    },
    [labelId],
  )

  const getGroupProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref,
      ...props,
      ...groupProps,
      "data-label": label,
    }),
    [groupProps, label],
  )

  return {
    label,
    getContainerProps,
    getGroupProps,
    getLabelProps,
  }
}

export type UseAutocompleteOptionGroupReturn = ReturnType<
  typeof useAutocompleteOptionGroup
>
