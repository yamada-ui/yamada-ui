import { forwardRef } from "@yamada-ui/core"
import { SquareLibrary as SquareLibraryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareLibraryProps = LucideIconProps

/**
 * `SquareLibrary` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareLibrary = forwardRef<SquareLibraryProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareLibraryIcon} {...props} />,
)
