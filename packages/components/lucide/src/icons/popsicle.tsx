import { forwardRef } from "@yamada-ui/core"
import { Popsicle as PopsicleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PopsicleProps = LucideIconProps

/**
 * `Popsicle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Popsicle = forwardRef<PopsicleProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PopsicleIcon} {...props} />
))
