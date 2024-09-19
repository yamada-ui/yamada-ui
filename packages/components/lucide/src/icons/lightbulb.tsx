import { forwardRef } from "@yamada-ui/core"
import { Lightbulb as LightbulbIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Lightbulb` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Lightbulb = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LightbulbIcon} {...props} />
))
