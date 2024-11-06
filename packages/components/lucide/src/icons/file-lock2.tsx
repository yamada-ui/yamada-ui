import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileLock2 as LucideFileLock2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileLock2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileLock2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileLock2Icon} {...props} />,
)

/**
 * @deprecated Use `FileLock2Icon` instead.
 */
export const FileLock2 = FileLock2Icon
