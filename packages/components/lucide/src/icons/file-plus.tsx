import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FilePlus as LucideFilePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FilePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilePlusIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFilePlusIcon} {...props} />
))

/**
 * @deprecated Use `FilePlusIcon` instead.
 */
export const FilePlus = FilePlusIcon
