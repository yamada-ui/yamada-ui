import { forwardRef } from "@yamada-ui/core"
import { JapaneseYen as JapaneseYenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type JapaneseYenProps = LucideIconProps

/**
 * `JapaneseYen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const JapaneseYen = forwardRef<JapaneseYenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={JapaneseYenIcon} {...props} />
))
