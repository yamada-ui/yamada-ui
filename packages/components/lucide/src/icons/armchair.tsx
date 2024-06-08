import { forwardRef } from "@yamada-ui/core"
import { Armchair as ArmchairIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArmchairProps = LucideIconProps

/**
 * `Armchair` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Armchair = forwardRef<ArmchairProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArmchairIcon} {...props} />
))
