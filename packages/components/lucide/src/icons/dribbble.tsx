import { forwardRef } from "@yamada-ui/core"
import { Dribbble as DribbbleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DribbbleProps = LucideIconProps

/**
 * `Dribbble` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dribbble = forwardRef<DribbbleProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DribbbleIcon} {...props} />
))
