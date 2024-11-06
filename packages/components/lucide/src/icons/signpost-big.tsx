import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SignpostBig as LucideSignpostBigIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SignpostBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignpostBigIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSignpostBigIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SignpostBigIcon` instead.
 */
export const SignpostBig = SignpostBigIcon
