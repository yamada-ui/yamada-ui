import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CableCar as LucideCableCarIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CableCarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CableCarIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCableCarIcon} {...props} />
))

/**
 * @deprecated Use `CableCarIcon` instead.
 */
export const CableCar = CableCarIcon
