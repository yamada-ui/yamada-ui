import { forwardRef } from "@yamada-ui/core"
import { Backpack as BackpackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BackpackProps = LucideIconProps

/**
 * `Backpack` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Backpack = forwardRef<BackpackProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BackpackIcon} {...props} />
))
