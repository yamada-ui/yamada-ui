import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CaseUpper as LucideCaseUpperIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CaseUpperIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CaseUpperIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCaseUpperIcon} {...props} />,
)

/**
 * @deprecated Use `CaseUpperIcon` instead.
 */
export const CaseUpper = CaseUpperIcon
