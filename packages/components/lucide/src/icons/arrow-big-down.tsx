import { forwardRef } from "@yamada-ui/core"
import { ArrowBigDown as ArrowBigDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowBigDownProps = LucideIconProps

/**
 * `ArrowBigDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigDown = forwardRef<ArrowBigDownProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowBigDownIcon} {...props} />,
)
