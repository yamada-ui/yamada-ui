import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SaveAll as SaveAllIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SaveAll` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SaveAll = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SaveAllIcon} {...props} />
))
