import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Utensils as UtensilsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Utensils` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Utensils = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UtensilsIcon} {...props} />
))
