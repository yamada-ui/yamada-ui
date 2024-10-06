import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HandPlatter as HandPlatterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HandPlatter` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandPlatter = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HandPlatterIcon} {...props} />
))
