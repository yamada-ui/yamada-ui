import { forwardRef } from "@yamada-ui/core"
import { Trees as TreesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TreesProps = LucideIconProps

/**
 * `Trees` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Trees = forwardRef<TreesProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TreesIcon} {...props} />
))
