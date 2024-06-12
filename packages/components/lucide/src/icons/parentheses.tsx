import { forwardRef } from "@yamada-ui/core"
import { Parentheses as ParenthesesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ParenthesesProps = LucideIconProps

/**
 * `Parentheses` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Parentheses = forwardRef<ParenthesesProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ParenthesesIcon} {...props} />
))
