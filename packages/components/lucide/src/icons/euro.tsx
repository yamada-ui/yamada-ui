import { forwardRef } from "@yamada-ui/core"
import { Euro as EuroIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Euro` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Euro = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EuroIcon} {...props} />
))
