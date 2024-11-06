import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CaseSensitive as LucideCaseSensitiveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CaseSensitiveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CaseSensitiveIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCaseSensitiveIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CaseSensitiveIcon` instead.
 */
export const CaseSensitive = CaseSensitiveIcon
