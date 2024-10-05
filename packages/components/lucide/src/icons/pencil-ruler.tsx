import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PencilRuler as PencilRulerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PencilRuler` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PencilRuler = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PencilRulerIcon} {...props} />
))
