import { forwardRef } from "@yamada-ui/core"
import { ArrowRightFromLine as ArrowRightFromLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowRightFromLineProps = LucideIconProps

/**
 * `ArrowRightFromLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowRightFromLine = forwardRef<ArrowRightFromLineProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ArrowRightFromLineIcon} {...props} />
  ),
)
