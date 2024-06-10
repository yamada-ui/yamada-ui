import { forwardRef } from "@yamada-ui/core"
import { Captions as CaptionsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CaptionsProps = LucideIconProps

/**
 * `Captions` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Captions = forwardRef<CaptionsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CaptionsIcon} {...props} />
))
