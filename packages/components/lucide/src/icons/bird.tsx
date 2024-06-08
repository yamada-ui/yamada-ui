import { forwardRef } from "@yamada-ui/core"
import { Bird as BirdIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BirdProps = LucideIconProps

/**
 * `Bird` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bird = forwardRef<BirdProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BirdIcon} {...props} />
))
