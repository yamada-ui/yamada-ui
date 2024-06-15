import { forwardRef } from "@yamada-ui/core"
import { FolderDot as FolderDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderDotProps = LucideIconProps

/**
 * `FolderDot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderDot = forwardRef<FolderDotProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderDotIcon} {...props} />
))
