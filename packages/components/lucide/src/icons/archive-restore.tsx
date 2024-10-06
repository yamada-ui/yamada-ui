import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArchiveRestore as ArchiveRestoreIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArchiveRestore` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArchiveRestore = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArchiveRestoreIcon} {...props} />,
)
