import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CopySlash as LucideCopySlashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CopySlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopySlashIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCopySlashIcon} {...props} />,
)

/**
 * @deprecated Use `CopySlashIcon` instead.
 */
export const CopySlash = CopySlashIcon
