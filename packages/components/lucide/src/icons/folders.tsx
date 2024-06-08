import { forwardRef } from "@yamada-ui/core"
import { Folders as FoldersIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FoldersProps = LucideIconProps

/**
 * `Folders` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Folders = forwardRef<FoldersProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FoldersIcon} {...props} />
))
