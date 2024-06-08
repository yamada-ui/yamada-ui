import { forwardRef } from "@yamada-ui/core"
import { ArchiveX as ArchiveXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArchiveXProps = LucideIconProps

/**
 * `ArchiveX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArchiveX = forwardRef<ArchiveXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArchiveXIcon} {...props} />
))
