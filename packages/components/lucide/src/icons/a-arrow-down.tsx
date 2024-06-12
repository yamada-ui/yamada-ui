import { forwardRef } from "@yamada-ui/core"
import { AArrowDown as AArrowDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AArrowDownProps = LucideIconProps

/**
 * `AArrowDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AArrowDown = forwardRef<AArrowDownProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AArrowDownIcon} {...props} />
))
