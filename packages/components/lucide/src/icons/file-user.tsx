import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileUser as LucideFileUserIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileUserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileUserIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFileUserIcon} {...props} />
))

/**
 * @deprecated Use `FileUserIcon` instead.
 */
export const FileUser = FileUserIcon
