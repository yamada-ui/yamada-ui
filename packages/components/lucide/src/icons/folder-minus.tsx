import { forwardRef } from "@yamada-ui/core"
import { FolderMinus as FolderMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderMinusProps = LucideIconProps

/**
 * `FolderMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderMinus = forwardRef<FolderMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderMinusIcon} {...props} />
))
