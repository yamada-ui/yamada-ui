import { forwardRef } from "@yamada-ui/core"
import { Torus as TorusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TorusProps = LucideIconProps

/**
 * `Torus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Torus = forwardRef<TorusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TorusIcon} {...props} />
))
