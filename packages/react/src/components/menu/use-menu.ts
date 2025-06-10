import type { Popover } from "../popover"

export interface UseMenuProps
  extends Omit<Popover.RootProps, "closeOnButton" | "relatedRef"> {
  /**
   * If `true`, the list element will be closed when value is selected.
   *
   * @default true
   */
  closeOnSelect?: boolean
}

export const useMenu = ({ ...rest }: UseMenuProps) => {
  return { ...rest }
}

export type UseMenuReturn = ReturnType<typeof useMenu>
