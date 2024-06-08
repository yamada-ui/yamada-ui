import { forwardRef } from "@yamada-ui/core"
import { Rewind as RewindIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RewindProps = LucideIconProps

/**
 * `Rewind` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rewind = forwardRef<RewindProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RewindIcon} {...props} />
))
