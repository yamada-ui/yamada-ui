import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlarmClockPlus as AlarmClockPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlarmClockPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmClockPlus = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={AlarmClockPlusIcon} {...props} />,
)
