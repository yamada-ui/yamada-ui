import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dog as LucideDogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DogIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDogIcon} {...props} />
))

/**
 * @deprecated Use `DogIcon` instead.
 */
export const Dog = DogIcon
