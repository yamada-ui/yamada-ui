import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileCode2 as LucideFileCode2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileCode2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileCode2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileCode2Icon} {...props} />,
)

/**
 * @deprecated Use `FileCode2Icon` instead.
 */
export const FileCode2 = FileCode2Icon
