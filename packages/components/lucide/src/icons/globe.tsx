import { forwardRef } from "@yamada-ui/core"
import { Globe as GlobeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GlobeProps = LucideIconProps

/**
 * `Globe` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Globe = forwardRef<GlobeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GlobeIcon} {...props} />
))
