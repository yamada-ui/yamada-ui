import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Chrome as LucideChromeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChromeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChromeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideChromeIcon} {...props} />
))

/**
 * @deprecated Use `ChromeIcon` instead.
 */
export const Chrome = ChromeIcon
