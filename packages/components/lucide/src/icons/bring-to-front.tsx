import { forwardRef } from "@yamada-ui/core"
import { BringToFront as BringToFrontIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BringToFrontProps = LucideIconProps

/**
 * `BringToFront` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BringToFront = forwardRef<BringToFrontProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BringToFrontIcon} {...props} />,
)
