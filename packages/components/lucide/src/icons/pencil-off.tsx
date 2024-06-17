import { forwardRef } from "@yamada-ui/core"
import { PencilOff as PencilOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PencilOffProps = LucideIconProps

/**
 * `PencilOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PencilOff = forwardRef<PencilOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PencilOffIcon} {...props} />
))
