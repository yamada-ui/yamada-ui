import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Store as LucideStoreIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `StoreIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StoreIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideStoreIcon} {...props} />
))

/**
 * @deprecated Use `StoreIcon` instead.
 */
export const Store = StoreIcon
