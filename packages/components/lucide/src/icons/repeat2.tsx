import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Repeat2 as Repeat2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Repeat2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Repeat2 = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Repeat2Icon} {...props} />
))
