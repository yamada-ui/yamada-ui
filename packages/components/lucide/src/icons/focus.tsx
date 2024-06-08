import { forwardRef } from "@yamada-ui/core"
import { Focus as FocusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FocusProps = LucideIconProps

/**
 * `Focus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Focus = forwardRef<FocusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FocusIcon} {...props} />
))
