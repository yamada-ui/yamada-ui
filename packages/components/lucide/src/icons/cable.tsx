import { forwardRef } from "@yamada-ui/core"
import { Cable as CableIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CableProps = LucideIconProps

/**
 * `Cable` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cable = forwardRef<CableProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CableIcon} {...props} />
))
