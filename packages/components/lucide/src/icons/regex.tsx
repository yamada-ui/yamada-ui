import { forwardRef } from "@yamada-ui/core"
import { Regex as RegexIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RegexProps = LucideIconProps

/**
 * `Regex` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Regex = forwardRef<RegexProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RegexIcon} {...props} />
))
