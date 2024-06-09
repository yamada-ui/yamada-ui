import { forwardRef } from "@yamada-ui/core"
import { Wheat as WheatIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WheatProps = LucideIconProps

/**
 * `Wheat` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Wheat = forwardRef<WheatProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WheatIcon} {...props} />
))
