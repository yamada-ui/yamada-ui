import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CassetteTape as CassetteTapeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CassetteTape` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CassetteTape = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CassetteTapeIcon} {...props} />
))
