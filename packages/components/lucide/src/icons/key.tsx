import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Key as KeyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Key` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Key = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={KeyIcon} {...props} />
))
