import { forwardRef } from "@yamada-ui/core"
import { SquareSigma as SquareSigmaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareSigmaProps = LucideIconProps

/**
 * `SquareSigma` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSigma = forwardRef<SquareSigmaProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquareSigmaIcon} {...props} />
))
