import { forwardRef } from "@yamada-ui/core"
import { FileLock2 as FileLock2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileLock2Props = LucideIconProps

/**
 * `FileLock2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileLock2 = forwardRef<FileLock2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileLock2Icon} {...props} />
))
