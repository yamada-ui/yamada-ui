import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BrainCog as LucideBrainCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BrainCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BrainCogIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBrainCogIcon} {...props} />
))

/**
 * @deprecated Use `BrainCogIcon` instead.
 */
export const BrainCog = BrainCogIcon
