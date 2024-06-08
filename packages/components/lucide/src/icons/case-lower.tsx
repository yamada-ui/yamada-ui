import { forwardRef } from "@yamada-ui/core"
import { CaseLower as CaseLowerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CaseLowerProps = LucideIconProps

/**
 * `CaseLower` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CaseLower = forwardRef<CaseLowerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CaseLowerIcon} {...props} />
))
