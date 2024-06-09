import { forwardRef } from "@yamada-ui/core"
import { Pi as PiIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PiProps = LucideIconProps

/**
 * `Pi` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Pi = forwardRef<PiProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PiIcon} {...props} />
))
