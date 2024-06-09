import { forwardRef } from "@yamada-ui/core"
import { Hash as HashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HashProps = LucideIconProps

/**
 * `Hash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Hash = forwardRef<HashProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HashIcon} {...props} />
))
