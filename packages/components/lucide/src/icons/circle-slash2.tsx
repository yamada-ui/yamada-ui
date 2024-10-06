import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleSlash2 as CircleSlash2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleSlash2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleSlash2 = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircleSlash2Icon} {...props} />
))
