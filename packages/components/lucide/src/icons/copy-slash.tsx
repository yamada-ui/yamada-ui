import { forwardRef } from "@yamada-ui/core"
import { CopySlash as CopySlashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CopySlashProps = LucideIconProps

/**
 * `CopySlash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopySlash = forwardRef<CopySlashProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CopySlashIcon} {...props} />
))
