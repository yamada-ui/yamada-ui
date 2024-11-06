import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileX2 as LucideFileX2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileX2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileX2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFileX2Icon} {...props} />
))

/**
 * @deprecated Use `FileX2Icon` instead.
 */
export const FileX2 = FileX2Icon
