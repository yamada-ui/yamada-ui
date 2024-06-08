import { forwardRef } from "@yamada-ui/core"
import { Dot as DotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DotProps = LucideIconProps

/**
 * `Dot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dot = forwardRef<DotProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DotIcon} {...props} />
))
