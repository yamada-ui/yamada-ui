import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { WheatOff as LucideWheatOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WheatOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WheatOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWheatOffIcon} {...props} />
))

/**
 * @deprecated Use `WheatOffIcon` instead.
 */
export const WheatOff = WheatOffIcon
