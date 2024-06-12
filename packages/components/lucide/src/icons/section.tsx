import { forwardRef } from "@yamada-ui/core"
import { Section as SectionIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SectionProps = LucideIconProps

/**
 * `Section` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Section = forwardRef<SectionProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SectionIcon} {...props} />
))
