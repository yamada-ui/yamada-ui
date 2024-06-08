import { forwardRef } from "@yamada-ui/core"
import { Cast as CastIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CastProps = LucideIconProps

/**
 * `Cast` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cast = forwardRef<CastProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CastIcon} {...props} />
))
