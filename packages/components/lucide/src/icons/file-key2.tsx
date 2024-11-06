import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileKey2 as LucideFileKey2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileKey2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileKey2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFileKey2Icon} {...props} />
))

/**
 * @deprecated Use `FileKey2Icon` instead.
 */
export const FileKey2 = FileKey2Icon
