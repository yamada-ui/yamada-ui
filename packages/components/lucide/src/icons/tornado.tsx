import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tornado as TornadoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Tornado` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tornado = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TornadoIcon} {...props} />
))
