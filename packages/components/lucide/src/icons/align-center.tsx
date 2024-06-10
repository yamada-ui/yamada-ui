import { forwardRef } from "@yamada-ui/core"
import { AlignCenter as AlignCenterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignCenterProps = LucideIconProps

/**
 * `AlignCenter` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignCenter = forwardRef<AlignCenterProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AlignCenterIcon} {...props} />
))
