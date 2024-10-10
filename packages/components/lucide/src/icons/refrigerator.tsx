import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Refrigerator as RefrigeratorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Refrigerator` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Refrigerator = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RefrigeratorIcon} {...props} />
))
