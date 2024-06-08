import { forwardRef } from "@yamada-ui/core"
import { SprayCan as SprayCanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SprayCanProps = LucideIconProps

/**
 * `SprayCan` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SprayCan = forwardRef<SprayCanProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SprayCanIcon} {...props} />
))
