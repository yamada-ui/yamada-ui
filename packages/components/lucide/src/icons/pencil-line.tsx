import { forwardRef } from "@yamada-ui/core"
import { PencilLine as PencilLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PencilLineProps = LucideIconProps

/**
 * `PencilLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PencilLine = forwardRef<PencilLineProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PencilLineIcon} {...props} />
))
