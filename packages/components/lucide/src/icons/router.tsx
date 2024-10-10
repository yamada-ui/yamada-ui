import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Router as RouterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Router` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Router = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RouterIcon} {...props} />
))
