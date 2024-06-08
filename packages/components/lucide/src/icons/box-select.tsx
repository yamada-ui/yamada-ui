import { forwardRef } from "@yamada-ui/core"
import { BoxSelect as BoxSelectIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BoxSelectProps = LucideIconProps

/**
 * `BoxSelect` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BoxSelect = forwardRef<BoxSelectProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BoxSelectIcon} {...props} />
))
