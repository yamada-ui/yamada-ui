import { forwardRef } from "@yamada-ui/core"
import { Award as AwardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AwardProps = LucideIconProps

/**
 * `Award` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Award = forwardRef<AwardProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AwardIcon} {...props} />
))
