import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ConciergeBell as ConciergeBellIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ConciergeBell` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ConciergeBell = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ConciergeBellIcon} {...props} />,
)
