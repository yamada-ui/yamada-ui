import { forwardRef } from "@yamada-ui/core"
import { HandPlatter as HandPlatterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HandPlatterProps = LucideIconProps

/**
 * `HandPlatter` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandPlatter = forwardRef<HandPlatterProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HandPlatterIcon} {...props} />
))
