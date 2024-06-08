import { forwardRef } from "@yamada-ui/core"
import { Link2 as Link2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Link2Props = LucideIconProps

/**
 * `Link2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Link2 = forwardRef<Link2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Link2Icon} {...props} />
))
