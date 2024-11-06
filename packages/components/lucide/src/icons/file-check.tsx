import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileCheck as LucideFileCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileCheckIcon} {...props} />,
)

/**
 * @deprecated Use `FileCheckIcon` instead.
 */
export const FileCheck = FileCheckIcon
