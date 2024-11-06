import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Link2 as LucideLink2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Link2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Link2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLink2Icon} {...props} />
))

/**
 * @deprecated Use `Link2Icon` instead.
 */
export const Link2 = Link2Icon
