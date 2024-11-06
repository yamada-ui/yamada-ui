import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Regex as LucideRegexIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RegexIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RegexIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRegexIcon} {...props} />
))

/**
 * @deprecated Use `RegexIcon` instead.
 */
export const Regex = RegexIcon
