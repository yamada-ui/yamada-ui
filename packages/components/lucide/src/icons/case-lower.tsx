import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CaseLower as LucideCaseLowerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CaseLowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CaseLowerIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCaseLowerIcon} {...props} />,
)

/**
 * @deprecated Use `CaseLowerIcon` instead.
 */
export const CaseLower = CaseLowerIcon
