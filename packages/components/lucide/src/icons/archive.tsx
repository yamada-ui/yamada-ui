import { forwardRef } from "@yamada-ui/core"
import { Archive as ArchiveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArchiveProps = LucideIconProps

/**
 * `Archive` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Archive = forwardRef<ArchiveProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArchiveIcon} {...props} />
))
