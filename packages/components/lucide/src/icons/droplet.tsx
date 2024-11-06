import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Droplet as LucideDropletIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DropletIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DropletIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDropletIcon} {...props} />
))

/**
 * @deprecated Use `DropletIcon` instead.
 */
export const Droplet = DropletIcon
