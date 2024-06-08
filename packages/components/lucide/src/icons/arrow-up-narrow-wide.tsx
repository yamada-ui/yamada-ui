import { forwardRef } from "@yamada-ui/core"
import { ArrowUpNarrowWide as ArrowUpNarrowWideIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowUpNarrowWideProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpNarrowWide = forwardRef<ArrowUpNarrowWideProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ArrowUpNarrowWideIcon} {...props} />
  ),
)
