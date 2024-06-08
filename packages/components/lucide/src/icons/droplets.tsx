import { forwardRef } from "@yamada-ui/core"
import { Droplets as DropletsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DropletsProps = LucideIconProps

/**
 * `Droplets` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Droplets = forwardRef<DropletsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DropletsIcon} {...props} />
))
