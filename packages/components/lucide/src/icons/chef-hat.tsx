import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChefHat as LucideChefHatIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChefHatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChefHatIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideChefHatIcon} {...props} />
))

/**
 * @deprecated Use `ChefHatIcon` instead.
 */
export const ChefHat = ChefHatIcon
