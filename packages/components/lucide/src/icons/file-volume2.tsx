import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileVolume2 as LucideFileVolume2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileVolume2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileVolume2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFileVolume2Icon} {...props} />
  ),
)

/**
 * @deprecated Use `FileVolume2Icon` instead.
 */
export const FileVolume2 = FileVolume2Icon
