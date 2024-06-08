import { forwardRef } from "@yamada-ui/core"
import { Baseline as BaselineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BaselineProps = LucideIconProps

/**
 * `Baseline` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Baseline = forwardRef<BaselineProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BaselineIcon} {...props} />
))
