import { forwardRef } from "@yamada-ui/core"
import { FileJson2 as FileJson2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileJson2Props = LucideIconProps

/**
 * `FileJson2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileJson2 = forwardRef<FileJson2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileJson2Icon} {...props} />
))
