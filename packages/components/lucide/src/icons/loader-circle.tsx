import { forwardRef } from "@yamada-ui/core"
import { LoaderCircle as LoaderCircleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LoaderCircleProps = LucideIconProps

/**
 * `LoaderCircle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LoaderCircle = forwardRef<LoaderCircleProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LoaderCircleIcon} {...props} />,
)
