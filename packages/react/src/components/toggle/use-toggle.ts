import type { HTMLProps, PropGetter } from "../../core"
import { useCallback } from "react"
import { dataAttr } from "../../utils"

export interface UseToggleProps extends HTMLProps<"button"> {
  /**
   * If `true`, the toggle button is represented as active.
   *
   * @default false
   */
  active?: boolean
  /**
   * If `true`, the toggle button will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the toggle button will be readonly.
   *
   * @default false
   */
  readOnly?: boolean
  /**
   * If `true`, the toggle button will be selected.
   */
  selected?: boolean
}

export const useToggle = ({
  active,
  disabled,
  readOnly,
  selected,
  ...rest
}: UseToggleProps) => {
  const getToggleProps: PropGetter<"button"> = useCallback(
    (props) => ({
      type: "button",
      "aria-pressed": selected,
      "data-active": dataAttr(active),
      "data-readonly": dataAttr(readOnly),
      "data-selected": dataAttr(selected),
      disabled,
      tabIndex: readOnly ? -1 : 0,
      ...rest,
      ...props,
    }),
    [active, disabled, readOnly, rest, selected],
  )

  return {
    getToggleProps,
  }
}

export type UseToggleReturn = ReturnType<typeof useToggle>
