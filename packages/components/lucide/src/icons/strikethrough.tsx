import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Strikethrough as StrikethroughIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Strikethrough` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Strikethrough = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={StrikethroughIcon} {...props} />,
)
