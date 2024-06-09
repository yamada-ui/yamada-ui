import { forwardRef } from "@yamada-ui/core"
import { ToggleRight as ToggleRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ToggleRightProps = LucideIconProps

/**
 * `ToggleRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ToggleRight = forwardRef<ToggleRightProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ToggleRightIcon} {...props} />
))
