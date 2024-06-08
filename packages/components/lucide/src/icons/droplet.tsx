import { forwardRef } from "@yamada-ui/core"
import { Droplet as DropletIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DropletProps = LucideIconProps

/**
 * `Droplet` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Droplet = forwardRef<DropletProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DropletIcon} {...props} />
))
