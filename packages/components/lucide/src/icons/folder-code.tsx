import { forwardRef } from "@yamada-ui/core"
import { FolderCode as FolderCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderCodeProps = LucideIconProps

/**
 * `FolderCode` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderCode = forwardRef<FolderCodeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderCodeIcon} {...props} />
))
