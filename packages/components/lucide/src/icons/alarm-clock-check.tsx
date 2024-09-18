import { forwardRef } from "@yamada-ui/core"
import { AlarmClockCheck as AlarmClockCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `AlarmClockCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmClockCheck = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={AlarmClockCheckIcon} {...props} />,
)
