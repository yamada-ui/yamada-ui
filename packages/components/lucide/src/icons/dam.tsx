import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dam as DamIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Dam` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dam = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DamIcon} {...props} />
))
