import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { RemoveFormatting as OriginalRemoveFormatting } from "lucide-react"

/**
 * `RemoveFormattingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RemoveFormattingIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalRemoveFormatting} {...props} />,
)

/**
 * `RemoveFormatting` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `RemoveFormattingIcon` instead.
 */
export const RemoveFormatting = RemoveFormattingIcon
