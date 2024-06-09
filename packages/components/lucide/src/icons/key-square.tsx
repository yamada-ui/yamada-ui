import { forwardRef } from "@yamada-ui/core"
import { KeySquare as KeySquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type KeySquareProps = LucideIconProps

/**
 * `KeySquare` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeySquare = forwardRef<KeySquareProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={KeySquareIcon} {...props} />
))
