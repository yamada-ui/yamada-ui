import { forwardRef } from "@yamada-ui/core"
import { EarthLock as EarthLockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type EarthLockProps = LucideIconProps

/**
 * `EarthLock` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EarthLock = forwardRef<EarthLockProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EarthLockIcon} {...props} />
))
