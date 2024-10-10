import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Type as TypeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Type` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Type = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TypeIcon} {...props} />
))
