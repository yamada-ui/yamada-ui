import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Music2 as LucideMusic2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Music2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Music2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMusic2Icon} {...props} />
))

/**
 * @deprecated Use `Music2Icon` instead.
 */
export const Music2 = Music2Icon
