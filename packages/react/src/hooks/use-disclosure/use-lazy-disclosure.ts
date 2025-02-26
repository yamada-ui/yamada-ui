export type LazyMode = "keepMounted" | "unmount"

export interface UseLazyDisclosureProps {
  enabled?: boolean
  mode?: LazyMode
  selected?: boolean
  wasSelected?: boolean
}

export const useLazyDisclosure = ({
  enabled,
  mode = "unmount",
  selected,
  wasSelected,
}: UseLazyDisclosureProps) => {
  if (!enabled) return true

  if (selected) return true

  if (mode === "keepMounted" && wasSelected) return true

  return false
}
