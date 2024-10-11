import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SmilePlus as SmilePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SmilePlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SmilePlus = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SmilePlusIcon} {...props} />
))
