import { forwardRef } from "@yamada-ui/core"
import { FlagTriangleLeft as FlagTriangleLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FlagTriangleLeftProps = LucideIconProps

/**
 * `FlagTriangleLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlagTriangleLeft = forwardRef<FlagTriangleLeftProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FlagTriangleLeftIcon} {...props} />,
)
