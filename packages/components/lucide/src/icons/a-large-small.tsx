import { forwardRef } from "@yamada-ui/core"
import { ALargeSmall as ALargeSmallIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ALargeSmallProps = LucideIconProps

/**
 * `ALargeSmall` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ALargeSmall = forwardRef<ALargeSmallProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ALargeSmallIcon} {...props} />
))
