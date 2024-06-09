import { forwardRef } from "@yamada-ui/core"
import { Milestone as MilestoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MilestoneProps = LucideIconProps

/**
 * `Milestone` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Milestone = forwardRef<MilestoneProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MilestoneIcon} {...props} />
))
