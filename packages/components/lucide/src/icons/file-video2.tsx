import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileVideo2 as LucideFileVideo2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileVideo2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileVideo2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileVideo2Icon} {...props} />,
)

/**
 * @deprecated Use `FileVideo2Icon` instead.
 */
export const FileVideo2 = FileVideo2Icon
