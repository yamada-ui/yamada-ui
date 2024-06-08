import { forwardRef } from "@yamada-ui/core"
import { CassetteTape as CassetteTapeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CassetteTapeProps = LucideIconProps

/**
 * `CassetteTape` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CassetteTape = forwardRef<CassetteTapeProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CassetteTapeIcon} {...props} />,
)
