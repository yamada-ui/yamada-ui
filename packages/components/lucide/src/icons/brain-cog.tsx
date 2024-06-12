import { forwardRef } from "@yamada-ui/core"
import { BrainCog as BrainCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BrainCogProps = LucideIconProps

/**
 * `BrainCog` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BrainCog = forwardRef<BrainCogProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BrainCogIcon} {...props} />
))
