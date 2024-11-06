import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { JapaneseYen as LucideJapaneseYenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `JapaneseYenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const JapaneseYenIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideJapaneseYenIcon} {...props} />
  ),
)

/**
 * @deprecated Use `JapaneseYenIcon` instead.
 */
export const JapaneseYen = JapaneseYenIcon
