export type LazyMode = "keepMounted" | "unmount"

export interface UseLazyDisclosureProps {
  enabled?: boolean
  /**
   * @deprecated Use `selected` instead.
   */
  isSelected?: boolean
  mode?: LazyMode
  selected?: boolean
  wasSelected?: boolean
}

export const useLazyDisclosure = ({
  enabled,
  isSelected,
  mode = "unmount",
  selected = isSelected,
  wasSelected,
}: UseLazyDisclosureProps) => {
  if (!enabled) return true

  if (selected) return true

  if (mode === "keepMounted" && wasSelected) return true

  return false
}
