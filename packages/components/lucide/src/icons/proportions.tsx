import { forwardRef } from "@yamada-ui/core"
import { Proportions as ProportionsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ProportionsProps = LucideIconProps

/**
 * `Proportions` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Proportions = forwardRef<ProportionsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ProportionsIcon} {...props} />
))
