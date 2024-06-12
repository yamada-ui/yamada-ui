import { forwardRef } from "@yamada-ui/core"
import { Sigma as SigmaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SigmaProps = LucideIconProps

/**
 * `Sigma` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sigma = forwardRef<SigmaProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SigmaIcon} {...props} />
))
