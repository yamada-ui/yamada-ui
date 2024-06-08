import { forwardRef } from "@yamada-ui/core"
import { BadgePlus as BadgePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgePlusProps = LucideIconProps

/**
 * `BadgePlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgePlus = forwardRef<BadgePlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BadgePlusIcon} {...props} />
))
