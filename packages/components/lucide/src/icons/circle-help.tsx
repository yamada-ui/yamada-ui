import { forwardRef } from "@yamada-ui/core"
import { CircleHelp as CircleHelpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleHelpProps = LucideIconProps

/**
 * `CircleHelp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleHelp = forwardRef<CircleHelpProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircleHelpIcon} {...props} />
))
