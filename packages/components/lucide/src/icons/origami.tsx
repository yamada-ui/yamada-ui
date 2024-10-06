import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Origami as OrigamiIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Origami` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Origami = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={OrigamiIcon} {...props} />
))
