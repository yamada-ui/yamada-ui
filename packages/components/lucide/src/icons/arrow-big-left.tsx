import { forwardRef } from "@yamada-ui/core"
import { ArrowBigLeft as ArrowBigLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowBigLeftProps = LucideIconProps

/**
 * `ArrowBigLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigLeft = forwardRef<ArrowBigLeftProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowBigLeftIcon} {...props} />,
)
