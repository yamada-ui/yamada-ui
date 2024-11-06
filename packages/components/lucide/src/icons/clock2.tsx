import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clock2 as LucideClock2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Clock2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideClock2Icon} {...props} />
))

/**
 * @deprecated Use `Clock2Icon` instead.
 */
export const Clock2 = Clock2Icon
