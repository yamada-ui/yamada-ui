import { forwardRef } from "@yamada-ui/core"
import { ShowerHead as ShowerHeadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShowerHeadProps = LucideIconProps

/**
 * `ShowerHead` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShowerHead = forwardRef<ShowerHeadProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShowerHeadIcon} {...props} />
))
