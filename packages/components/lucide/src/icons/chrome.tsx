import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Chrome as ChromeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Chrome` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Chrome = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ChromeIcon} {...props} />
))
