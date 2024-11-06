import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SprayCan as LucideSprayCanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SprayCanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SprayCanIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSprayCanIcon} {...props} />
))

/**
 * @deprecated Use `SprayCanIcon` instead.
 */
export const SprayCan = SprayCanIcon
