import { forwardRef } from "@yamada-ui/core"
import { RemoveFormatting as RemoveFormattingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RemoveFormattingProps = LucideIconProps

/**
 * `RemoveFormatting` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RemoveFormatting = forwardRef<RemoveFormattingProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={RemoveFormattingIcon} {...props} />,
)
