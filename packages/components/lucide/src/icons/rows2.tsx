import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Rows2 as LucideRows2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Rows2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rows2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRows2Icon} {...props} />
))

/**
 * @deprecated Use `Rows2Icon` instead.
 */
export const Rows2 = Rows2Icon
