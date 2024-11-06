import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CassetteTape as LucideCassetteTapeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CassetteTapeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CassetteTapeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCassetteTapeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CassetteTapeIcon` instead.
 */
export const CassetteTape = CassetteTapeIcon
