import { forwardRef } from "@yamada-ui/core"
import { Lollipop as LollipopIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LollipopProps = LucideIconProps

/**
 * `Lollipop` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Lollipop = forwardRef<LollipopProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LollipopIcon} {...props} />
))
