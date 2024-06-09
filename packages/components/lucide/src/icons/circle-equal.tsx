import { forwardRef } from "@yamada-ui/core"
import { CircleEqual as CircleEqualIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleEqualProps = LucideIconProps

/**
 * `CircleEqual` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleEqual = forwardRef<CircleEqualProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircleEqualIcon} {...props} />
))
