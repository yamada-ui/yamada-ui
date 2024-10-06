import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlarmSmoke as AlarmSmokeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlarmSmoke` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmSmoke = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AlarmSmokeIcon} {...props} />
))
