import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Utensils as LucideUtensilsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UtensilsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UtensilsIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideUtensilsIcon} {...props} />
))

/**
 * @deprecated Use `UtensilsIcon` instead.
 */
export const Utensils = UtensilsIcon
