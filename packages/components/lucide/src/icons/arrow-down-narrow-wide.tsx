import { forwardRef } from "@yamada-ui/core"
import { ArrowDownNarrowWide as ArrowDownNarrowWideIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowDownNarrowWideProps = LucideIconProps

/**
 * `ArrowDownNarrowWide` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownNarrowWide = forwardRef<ArrowDownNarrowWideProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ArrowDownNarrowWideIcon} {...props} />
  ),
)
