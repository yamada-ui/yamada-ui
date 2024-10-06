import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AppWindow as AppWindowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AppWindow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AppWindow = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AppWindowIcon} {...props} />
))
