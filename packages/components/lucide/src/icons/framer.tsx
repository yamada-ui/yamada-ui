import { forwardRef } from "@yamada-ui/core"
import { Framer as FramerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FramerProps = LucideIconProps

/**
 * `Framer` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Framer = forwardRef<FramerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FramerIcon} {...props} />
))
