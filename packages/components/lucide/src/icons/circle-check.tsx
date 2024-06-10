import { forwardRef } from "@yamada-ui/core"
import { CircleCheck as CircleCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleCheckProps = LucideIconProps

/**
 * `CircleCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleCheck = forwardRef<CircleCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircleCheckIcon} {...props} />
))
