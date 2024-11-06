import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Pointer as LucidePointerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PointerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PointerIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePointerIcon} {...props} />
))

/**
 * @deprecated Use `PointerIcon` instead.
 */
export const Pointer = PointerIcon
