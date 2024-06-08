import { forwardRef } from "@yamada-ui/core"
import { Citrus as CitrusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CitrusProps = LucideIconProps

/**
 * `Citrus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Citrus = forwardRef<CitrusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CitrusIcon} {...props} />
))
