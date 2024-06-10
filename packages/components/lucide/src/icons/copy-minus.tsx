import { forwardRef } from "@yamada-ui/core"
import { CopyMinus as CopyMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CopyMinusProps = LucideIconProps

/**
 * `CopyMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyMinus = forwardRef<CopyMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CopyMinusIcon} {...props} />
))
