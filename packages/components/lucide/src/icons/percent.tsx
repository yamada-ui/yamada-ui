import { forwardRef } from "@yamada-ui/core"
import { Percent as PercentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PercentProps = LucideIconProps

/**
 * `Percent` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Percent = forwardRef<PercentProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PercentIcon} {...props} />
))
