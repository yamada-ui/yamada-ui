import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Armchair as LucideArmchairIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArmchairIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArmchairIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideArmchairIcon} {...props} />
))

/**
 * @deprecated Use `ArmchairIcon` instead.
 */
export const Armchair = ArmchairIcon
