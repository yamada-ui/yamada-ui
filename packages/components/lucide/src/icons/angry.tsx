import { forwardRef } from "@yamada-ui/core"
import { Angry as AngryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AngryProps = LucideIconProps

/**
 * `Angry` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Angry = forwardRef<AngryProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AngryIcon} {...props} />
))
