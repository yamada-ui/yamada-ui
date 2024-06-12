import { forwardRef } from "@yamada-ui/core"
import { Pentagon as PentagonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PentagonProps = LucideIconProps

/**
 * `Pentagon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Pentagon = forwardRef<PentagonProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PentagonIcon} {...props} />
))
