import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FoldVertical as FoldVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FoldVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FoldVertical = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FoldVerticalIcon} {...props} />
))
