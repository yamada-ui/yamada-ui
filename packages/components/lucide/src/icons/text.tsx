import { forwardRef } from "@yamada-ui/core"
import { Text as TextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TextProps = LucideIconProps

/**
 * `Text` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Text = forwardRef<TextProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TextIcon} {...props} />
))
