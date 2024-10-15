import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Forklift as ForkliftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Forklift` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Forklift = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ForkliftIcon} {...props} />
))
