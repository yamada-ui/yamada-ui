import { forwardRef } from "@yamada-ui/core"
import { Sparkle as SparkleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SparkleProps = LucideIconProps

/**
 * `Sparkle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sparkle = forwardRef<SparkleProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SparkleIcon} {...props} />
))
