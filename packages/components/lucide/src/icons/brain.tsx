import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Brain as LucideBrainIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BrainIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BrainIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBrainIcon} {...props} />
))

/**
 * @deprecated Use `BrainIcon` instead.
 */
export const Brain = BrainIcon
