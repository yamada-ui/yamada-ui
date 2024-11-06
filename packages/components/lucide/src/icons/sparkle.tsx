import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sparkle as LucideSparkleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SparkleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SparkleIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSparkleIcon} {...props} />
))

/**
 * @deprecated Use `SparkleIcon` instead.
 */
export const Sparkle = SparkleIcon
