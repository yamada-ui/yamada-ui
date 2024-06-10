import { forwardRef } from "@yamada-ui/core"
import { FolderKey as FolderKeyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderKeyProps = LucideIconProps

/**
 * `FolderKey` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderKey = forwardRef<FolderKeyProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderKeyIcon} {...props} />
))
