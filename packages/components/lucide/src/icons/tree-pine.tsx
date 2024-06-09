import { forwardRef } from "@yamada-ui/core"
import { TreePine as TreePineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TreePineProps = LucideIconProps

/**
 * `TreePine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TreePine = forwardRef<TreePineProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TreePineIcon} {...props} />
))
