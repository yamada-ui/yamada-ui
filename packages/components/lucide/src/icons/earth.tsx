import { forwardRef } from "@yamada-ui/core"
import { Earth as EarthIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type EarthProps = LucideIconProps

/**
 * `Earth` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Earth = forwardRef<EarthProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EarthIcon} {...props} />
))
