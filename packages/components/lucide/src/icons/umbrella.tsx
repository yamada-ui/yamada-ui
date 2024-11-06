import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Umbrella as LucideUmbrellaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UmbrellaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UmbrellaIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideUmbrellaIcon} {...props} />
))

/**
 * @deprecated Use `UmbrellaIcon` instead.
 */
export const Umbrella = UmbrellaIcon
