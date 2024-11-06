import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Section as LucideSectionIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SectionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SectionIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSectionIcon} {...props} />
))

/**
 * @deprecated Use `SectionIcon` instead.
 */
export const Section = SectionIcon
