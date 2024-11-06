import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListChecks as LucideListChecksIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListChecksIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListChecksIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideListChecksIcon} {...props} />,
)

/**
 * @deprecated Use `ListChecksIcon` instead.
 */
export const ListChecks = ListChecksIcon
