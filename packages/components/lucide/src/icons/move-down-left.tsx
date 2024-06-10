import { forwardRef } from "@yamada-ui/core"
import { MoveDownLeft as MoveDownLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MoveDownLeftProps = LucideIconProps

/**
 * `MoveDownLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveDownLeft = forwardRef<MoveDownLeftProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MoveDownLeftIcon} {...props} />,
)
