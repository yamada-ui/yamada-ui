import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sparkles as LucideSparklesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SparklesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SparklesIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSparklesIcon} {...props} />
))

/**
 * @deprecated Use `SparklesIcon` instead.
 */
export const Sparkles = SparklesIcon
