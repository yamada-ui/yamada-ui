import { forwardRef } from "@yamada-ui/core"
import { AlignLeft as AlignLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignLeftProps = LucideIconProps

/**
 * `AlignLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignLeft = forwardRef<AlignLeftProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AlignLeftIcon} {...props} />
))
