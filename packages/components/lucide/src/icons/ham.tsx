import { forwardRef } from "@yamada-ui/core"
import { Ham as HamIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HamProps = LucideIconProps

/**
 * `Ham` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ham = forwardRef<HamProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HamIcon} {...props} />
))
