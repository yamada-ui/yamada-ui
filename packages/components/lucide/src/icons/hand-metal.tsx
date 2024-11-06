import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HandMetal as LucideHandMetalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HandMetalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandMetalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideHandMetalIcon} {...props} />,
)

/**
 * @deprecated Use `HandMetalIcon` instead.
 */
export const HandMetal = HandMetalIcon
