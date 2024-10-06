import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CopySlash as CopySlashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CopySlash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopySlash = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CopySlashIcon} {...props} />
))
