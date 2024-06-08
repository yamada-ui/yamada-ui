import { forwardRef } from "@yamada-ui/core"
import { BadgeCent as BadgeCentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgeCentProps = LucideIconProps

/**
 * `BadgeCent` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeCent = forwardRef<BadgeCentProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BadgeCentIcon} {...props} />
))
