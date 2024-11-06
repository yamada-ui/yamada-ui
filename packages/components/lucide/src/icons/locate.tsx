import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Locate as LucideLocateIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LocateIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LocateIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLocateIcon} {...props} />
))

/**
 * @deprecated Use `LocateIcon` instead.
 */
export const Locate = LocateIcon
