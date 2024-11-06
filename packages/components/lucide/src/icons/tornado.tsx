import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tornado as LucideTornadoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TornadoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TornadoIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTornadoIcon} {...props} />
))

/**
 * @deprecated Use `TornadoIcon` instead.
 */
export const Tornado = TornadoIcon
