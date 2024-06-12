import { forwardRef } from "@yamada-ui/core"
import { Target as TargetIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TargetProps = LucideIconProps

/**
 * `Target` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Target = forwardRef<TargetProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TargetIcon} {...props} />
))
