import { forwardRef } from "@yamada-ui/core"
import { CircleSlash as CircleSlashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleSlashProps = LucideIconProps

/**
 * `CircleSlash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleSlash = forwardRef<CircleSlashProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircleSlashIcon} {...props} />
))
