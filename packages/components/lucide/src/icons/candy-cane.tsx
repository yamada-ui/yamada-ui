import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CandyCane as LucideCandyCaneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CandyCaneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CandyCaneIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCandyCaneIcon} {...props} />,
)

/**
 * @deprecated Use `CandyCaneIcon` instead.
 */
export const CandyCane = CandyCaneIcon
