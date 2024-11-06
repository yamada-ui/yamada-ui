import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AppWindow as LucideAppWindowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AppWindowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AppWindowIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideAppWindowIcon} {...props} />,
)

/**
 * @deprecated Use `AppWindowIcon` instead.
 */
export const AppWindow = AppWindowIcon
