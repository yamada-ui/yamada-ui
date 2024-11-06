import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileJson2 as LucideFileJson2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileJson2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileJson2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileJson2Icon} {...props} />,
)

/**
 * @deprecated Use `FileJson2Icon` instead.
 */
export const FileJson2 = FileJson2Icon
