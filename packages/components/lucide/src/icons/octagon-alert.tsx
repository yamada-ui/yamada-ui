import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { OctagonAlert as OctagonAlertIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `OctagonAlert` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OctagonAlert = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={OctagonAlertIcon} {...props} />
))
