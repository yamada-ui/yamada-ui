import { forwardRef } from "@yamada-ui/core"
import { Cog as CogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CogProps = LucideIconProps

/**
 * `Cog` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cog = forwardRef<CogProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CogIcon} {...props} />
))
