import { forwardRef } from "@yamada-ui/core"
import { FileUp as FileUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileUpProps = LucideIconProps

/**
 * `FileUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileUp = forwardRef<FileUpProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileUpIcon} {...props} />
))
