import { forwardRef } from "@yamada-ui/core"
import { FileVideo2 as FileVideo2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileVideo2Props = LucideIconProps

/**
 * `FileVideo2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileVideo2 = forwardRef<FileVideo2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileVideo2Icon} {...props} />
))
