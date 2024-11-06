import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Repeat2 as LucideRepeat2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Repeat2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Repeat2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRepeat2Icon} {...props} />
))

/**
 * @deprecated Use `Repeat2Icon` instead.
 */
export const Repeat2 = Repeat2Icon
