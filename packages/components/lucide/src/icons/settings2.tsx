import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Settings2 as Settings2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Settings2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Settings2 = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Settings2Icon} {...props} />
))
