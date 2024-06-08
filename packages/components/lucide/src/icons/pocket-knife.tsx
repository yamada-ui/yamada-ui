import { forwardRef } from "@yamada-ui/core"
import { PocketKnife as PocketKnifeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PocketKnifeProps = LucideIconProps

/**
 * `PocketKnife` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PocketKnife = forwardRef<PocketKnifeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PocketKnifeIcon} {...props} />
))
