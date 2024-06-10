import { forwardRef } from "@yamada-ui/core"
import { Origami as OrigamiIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type OrigamiProps = LucideIconProps

/**
 * `Origami` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Origami = forwardRef<OrigamiProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={OrigamiIcon} {...props} />
))
