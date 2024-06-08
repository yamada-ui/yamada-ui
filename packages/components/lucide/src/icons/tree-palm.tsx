import { forwardRef } from "@yamada-ui/core"
import { TreePalm as TreePalmIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TreePalmProps = LucideIconProps

/**
 * `TreePalm` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TreePalm = forwardRef<TreePalmProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TreePalmIcon} {...props} />
))
