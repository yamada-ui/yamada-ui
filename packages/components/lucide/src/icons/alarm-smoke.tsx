import { forwardRef } from "@yamada-ui/core"
import { AlarmSmoke as AlarmSmokeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlarmSmokeProps = LucideIconProps

/**
 * `AlarmSmoke` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmSmoke = forwardRef<AlarmSmokeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AlarmSmokeIcon} {...props} />
))
