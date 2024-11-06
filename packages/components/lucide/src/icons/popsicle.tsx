import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Popsicle as LucidePopsicleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PopsicleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PopsicleIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePopsicleIcon} {...props} />
))

/**
 * @deprecated Use `PopsicleIcon` instead.
 */
export const Popsicle = PopsicleIcon
