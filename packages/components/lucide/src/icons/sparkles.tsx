import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sparkles as SparklesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Sparkles` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sparkles = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SparklesIcon} {...props} />
))
