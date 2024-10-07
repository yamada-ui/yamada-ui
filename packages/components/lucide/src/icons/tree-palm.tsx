import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TreePalm as TreePalmIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TreePalm` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TreePalm = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TreePalmIcon} {...props} />
))
