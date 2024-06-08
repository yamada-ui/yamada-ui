import { forwardRef } from "@yamada-ui/core"
import { Cctv as CctvIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CctvProps = LucideIconProps

/**
 * `Cctv` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cctv = forwardRef<CctvProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CctvIcon} {...props} />
))
