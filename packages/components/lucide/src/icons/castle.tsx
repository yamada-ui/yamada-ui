import { forwardRef } from "@yamada-ui/core"
import { Castle as CastleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CastleProps = LucideIconProps

/**
 * `Castle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Castle = forwardRef<CastleProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CastleIcon} {...props} />
))
